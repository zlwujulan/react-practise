import * as TYPES from '../action-types';
let INIT_STATE = {
    bannerData: [],
    shopCart: {
        unpay: [],
        pay: []
    }
}
export default function custom(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // 获取轮播图数据
        case TYPES.COURSE_QUERY_BANNER:
            let { code, data } = action.payload;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        // 获取未支付和已支付
        case TYPES.COURSE_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
            }
            break;
        case TYPES.COURSE_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.pay = action.result.data;
            }
            break;
    }
    return state;
}