import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import action from '../../store/action';
class content extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    render() {
        const {todos,getChangeItemFinishedAction,delItem} = this.props;
        return <ul className="todo-main">
            {todos.map((item, index) => {
              return  <li key={index}>
                    <label>
                        <input type="checkbox" checked={item.finished} onChange={()=>{getChangeItemFinishedAction(item.id,!item.finished)}}/>
                        <span>{item.title}</span>
                    </label>
                    <Button type="primary"  onClick={()=>delItem(item.id)}>删除</Button>
                </li>
            })}

        </ul>
    }
}
export default connect(state=>({...state.dolist}),action.dolist)(content)






