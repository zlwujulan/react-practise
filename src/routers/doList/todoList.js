import React from 'react';
import { connect } from 'react-redux';
// localeProvide:国际化组件，目的是把组件汉化
// import { localeProvide, Calendar, Icon, Button } from 'antd';
// import '../static/antd.css'
import Head from './Head'
import Content from './content'
import Foot from './Foot'
class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
           todos: [
               {id:1,title:'看一小时react课程',finished:false},
               {id:2,title:'看一小时vue课程',finished:false},
               {id:3,title:'看一小时java课程',finished:false},
               {id:4,title:'看一小时python课程',finished:false}
            ],
            finishedCount:0
        }
    }
    // 修改完成的状态
    changeTodoFinished=(todoId,isFinished)=>{
        const tempTodos =this.state.todos;
        let finishedCount = 0;
        tempTodos.forEach((todo,index)=>{      
            if(todo.id==todoId){
                todo.finished = isFinished;
            }
            if(todo.finished){
                finishedCount +=1;
            }
        })
        this.setState({
            todos:[...tempTodos],
            finishedCount
        })
    }
    // 删除一条记录
    removeTodoWidthId=(todoId)=>{
        // 1 遍历
        const tempTodos =this.state.todos;
        let finishedCount = 0;
        tempTodos.forEach((todo,index)=>{      
            if(todo.id==todoId){
                tempTodos.splice(index,1)
            }
        })
        // 2 处理选中的
        tempTodos.forEach((todo,index)=>{
            if(todo.finished){
                finishedCount +=1;
            }
        })
        // 更新状态
        this.setState({
            todos:[...tempTodos],
            finishedCount
        })
    }
    // 添加一个todo
    addOneTodo=(todo)=>{
        let tempTodos =this.state.todos;
        tempTodos.push(todo);
        this.setState({
            todos:[...tempTodos]
        })
    }
    // 删除已经完成的所有任务
    delCheckedTodo=()=>{
        let tempTodos =this.state.todos;
        let tempArr=[];
        tempTodos.forEach((todo,index)=>{
            if(!todo.finished){
                tempArr.push(todo)
            }
        })
        // 更新状态
        this.setState({
            todos:tempArr,
            finishedCount:0
        })
    }
    // 选中/取消所有
    delSelectedAllTodo=(flag)=>{
        let tempTodos =this.state.todos;
        let finishedCount=0;
        tempTodos.forEach((todo)=>{
           todo.finished=flag

        })
        // 处理选中的
        tempTodos.forEach((todo)=>{
            if(todo.finished){
                finishedCount +=1;
            }
        })
        // 更新状态
        this.setState({
            todos:[...tempTodos],
            finishedCount
        })
    }
    render() {
        const {todos,finishedCount} = this.state;
        return <div className="todo-container">
            <div className="todo-wrap">
                <Head lastTodoId={todos.length==0?0:todos[todos.length -1].id} addOneTod={this.addOneTodo}/>
                <Content todos={todos}  removeTodoWidthId={this.removeTodoWidthId} changeTodoFinished={this.changeTodoFinished}/>
                <Foot finishedCount={finishedCount} totalCount={todos.length} delCheckedTodo={this.delCheckedTodo} delSelectedAllTodo={this.delSelectedAllTodo}/>
            </div>
         
           
        </div>
    }
}
export default connect()(TodoList)






