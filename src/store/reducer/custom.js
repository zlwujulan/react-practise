import * as TYPES from '../action-types';
export default function custom(state={
    data:[{
        id:1,
        name:'相柳'
    }]
},action){
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // 增加客户
        case TYPES.CUSTOM_CREATE:
            let {payload}  = action;
            state.data.push(payload)
            break;
        // case value:
            
        //     break;
    
        // default:
        //     break;
    }
    return state;
}