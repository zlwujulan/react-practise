import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
class content extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
        //   showDelBtn:false,
        //   listInfo:this.props.todos
        }
    }
  
    static propTypes = {
        todos: PropTypes.array.isRequired,
        removeTodoWidthId:PropTypes.func.isRequired,
        changeTodoFinished:PropTypes.func.isRequired
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    render() {
        const {todos} = this.props;
        return <ul className="todo-main">
            {todos.map((item, index) => {
              return  <li key={index}>
                    <label>
                        <input type="checkbox" checked={item.finished} onChange={()=>{this.props.changeTodoFinished(item.id,!item.finished)}}/>
                        <span>{item.title}</span>
                    </label>
                    <Button type="primary"  onClick={()=>this.props.removeTodoWidthId(item.id)}>删除</Button>
                </li>
            })}

        </ul>
    }
}
export default connect()(content)






