import * as TYPES from '../action-types';
let dolist = {
    // 删除一条记录
    delItem(todoId){
        return {
            type:TYPES.DEL_TODO_ITEM,
            todoId
        }
    },
    // 修改一条记录的状态
    getChangeItemFinishedAction(todoId,isFinished){
        return{
        type:TYPES.CHANGE_TODO_ITEM,
        todoId,
        isFinished 
        }
       
    },
    // 添加一条记录
    getAddItemAction(todo){
      return{
          type:TYPES.ADD_TODO_ITEM,
          todo
      }
    },
    // 删除已经完成的所有任务
    getRemoveFinishedItemAction(){
        return {
            type:TYPES.REMOVE_FINISHED_TODO_ITEM,

        }
    },
    // 全选和非全选
    getIsCheckedAll(flag){
      return{
        type:TYPES.IS_CHECK_ALL_ITEM,
        flag
      }
    }
};
export default dolist;