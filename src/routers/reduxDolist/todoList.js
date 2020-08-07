import React from 'react';
import { connect } from 'react-redux';
import {getTodoList} from '../../api/login'
// localeProvide:国际化组件，目的是把组件汉化
// import { localeProvide, Calendar, Icon, Button } from 'antd';
// import '../static/antd.css'
import Head from './Head'
import Content from './content'
import Foot from './Foot'
import action from '../../store/action';
import store from '../../store';
class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
           todos:this.props.todos,
           finishedCount:0
        }
    //    this._handleStoreChange = this._handleStoreChange.bind(this)
        // 订阅store的改变
        // store.subscribe(this._handleStoreChange)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            todos:nextProps.todos,
            finishedCount:nextProps.finishedCount
        })

    }
     async _reqTodoList(){
        const result = await getTodoList();
        console.log(result)
    }
    componentDidMount(){
        this._reqTodoList()
    }
    render() {
        const {todos,finishedCount} = this.state;
        return <div className="todo-container">
            <div className="todo-wrap">
                <Head />
                <Content  />
                <Foot />
            </div>
         
           
        </div>
    }
}
export default connect(state=>({...state.dolist}),action.dolist) (TodoList)






