import * as TYPES from '../action-types';
// 假设这里是请求banner的接口
import {queryBanner,queryShopCart} from '../../api/login'
let course = {
    queryBanner(){
        // return async dispatch =>{
        //     let bannerData = await queryBanner();
        //     dispatch({
        //         type:TYPES.COURSE_QUERY_BANNER,
        //         bannerData
        //     })
        // }  thunk中间件，下面的是promise中间件，必须是payload这个参数名字 
        return {
            type:TYPES.COURSE_QUERY_BANNER,
            payload:queryBanner()
        }
    },
    queryUnpay(){
        return async dispatch=>{
            let result = await queryShopCart(0);
            dispatch({
                type:TYPES.COURSE_UNPAY,
                result
            })
        }
    },
    querypay(){
        return async dispatch=>{
            let result = await queryShopCart(1);
            dispatch({
                type:TYPES.COURSE_PAY,
                result
            })
        }
    },
}
