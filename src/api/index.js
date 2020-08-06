import axios from 'axios';
import Qs from 'qs';
axios.defaults.baseURL='http://192.168.11.103/api/';
axios.defaults.withCredentials = true;//允许跨域并携带cookie
axios.defaults.transformRequest =(data={})=>Qs.stringify(data);
axios.interceptors.response.use(result =>result.data);//相应拦截器：把服务返回的信息中相应主体内容拦截返回，以后在then中获取的结果就是主体内容
export default axios;