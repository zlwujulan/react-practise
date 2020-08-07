
// 第一种方法
// import axios from './index'
// export  const getVerifcode=()=>{
//     return axios.get('admin/getVerifcode')
// }
// export  const queryShopCart=()=>{
//     return axios.get('admin/getVerifcode')
// }

// 第二种方法
import ajax from './index'
// 定义基础路径
const BASE_URL = '/api';
//  请求todo列表
export const getTodoList = ()=>ajax(BASE_URL+'/todos')

// 在页面中使用：引入api某个接口
// async _reqTodoList(){
//     const result = await.getTodoList();
// }
// componentDidMount(){
//     this._reqTodoList
// }
// 请求时会遇到跨域的问题，解决方法:在package.json中设置代理，基础路径改成api，但是他的端口号有问题，解决办法
// 1.react-script降级处理2.设置config.js中设置代理