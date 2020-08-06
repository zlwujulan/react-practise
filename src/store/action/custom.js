import * as TYPES from '../action-types';
let custom = {
    // 传递编号和姓名
    // create:增加客户信息 payload={iD，NAME}
    create(payload){
        return {
            type:TYPES.CUSTOM_CREATE,
            payload
        }
    }
};
export default custom;