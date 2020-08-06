import * as TYPES from '../action-types';
export default function dolist(state = {
    todos: [
        { id: 1, title: '看一小时react课程', finished: false },
        { id: 2, title: '看一小时vue课程', finished: false },
        { id: 3, title: '看一小时java课程', finished: false },
        { id: 4, title: '看一小时python课程', finished: false }
    ]
}, action) {
    const newState = JSON.parse(JSON.stringify(state))
    let finishedCount = 0;
    switch (action.type) {
        case TYPES.DEL_TODO_ITEM:
         
            newState.todos.forEach((todo, index) => {
                if (todo.id == action.todoId) {
                    newState.todos.splice(index, 1)
                }
            })
            // 2 处理选中的
            newState.todos.forEach((todo, index) => {
                if (todo.finished) {

                    finishedCount += 1;
                }
            })
            newState.finishedCount = finishedCount;
            return newState;
        case TYPES.CHANGE_TODO_ITEM:
            // let finishedCount = 0;
            newState.todos.forEach((todo, index) => {
                if (todo.id == action.todoId) {
                    todo.finished = action.isFinished;
                }
                if (todo.finished) {
                    finishedCount += 1;
                }
            })
            newState.finishedCount = finishedCount;
            return newState;
        case TYPES.ADD_TODO_ITEM:
            newState.todos.push(action.todo);
            return newState;
        case TYPES.REMOVE_FINISHED_TODO_ITEM:
            let tempArr=[];
            newState.todos.forEach((todo,index)=>{
                if(!todo.finished){
                    tempArr.push(todo)
                }
            })
            newState.todos=tempArr;
            return newState
        case TYPES.IS_CHECK_ALL_ITEM:
            newState.todos.forEach((todo)=>{
               todo.finished=action.flag
    
            })
            // 处理选中的
            newState.todos.forEach((todo)=>{
                if(todo.finished){
                    finishedCount +=1;
                }
            })
            newState.finishedCount = finishedCount;
            return newState;
    }
    return state;
}