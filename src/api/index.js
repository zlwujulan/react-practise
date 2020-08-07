import axios from 'axios';
// 第一种方法

// import Qs from 'qs';
// axios.defaults.baseURL='http://192.168.11.103/api/';
// axios.defaults.withCredentials = true;//允许跨域并携带cookie
// axios.defaults.transformRequest =(data={})=>Qs.stringify(data);
// axios.interceptors.response.use(result =>result.data);//相应拦截器：把服务返回的信息中相应主体内容拦截返回，以后在then中获取的结果就是主体内容
// export default axios;

// 第二种方法
export default function ajax(url='',params={},type='GET'){
    let promise;
    // 1.返回promise对象
    return new Promise((resolve,reject)=>{
        // 判断请求的方式
        if('GET'===type.toLocaleUpperCase()){
            // 拼接字符串
            let paramsStr = '';
            Object.keys(params).forEach(key=>{
                paramsStr+=key+'='+params[key]+'&'
            });
            // 过滤最后的&
            if(paramsStr!==''){
                paramsStr=paramsStr.substr(0,paramsStr.lastIndexOf('&'))
            }
            // 拼接完整的路径
            url+='?'+paramsStr;
            // 发起get请求
            promise = axios.get(url)
        }else if('POST'===type.toLocaleUpperCase()){
               promise = axios.post(url,params)
        }
        // 返回结果
        promise.then((response)=>{
            resolve(response.data)
        }).catch(error=>{
            reject(error)
        })
    })
}