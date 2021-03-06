import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Title from 'antd/lib/skeleton/Title';
class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
        // 绑定ref
        this.myInput = React.createRef();
    }
    static propTypes = {
        lastTodoId: PropTypes.number.isRequired,
        addOneTod: PropTypes.func.isRequired
    }
    _handleEvent(e) {
        const { lastTodoId, addOneTod } = this.props;
        //    是否是回车键
        if (13 == e.keyCode) {
            if (!this.myInput.current.value) {
                alert('输入的内容不能为空！')
                return;
            }
            //    创建todo对象，并返回
            const todo = {
                id: lastTodoId + 1,
                title: this.myInput.current.value,
                finished: false
            }
            addOneTod(todo)
            // 清空内容
            this.myInput.current.value =''
        }
    }

    render() {
        return <div className="todo-header">
            <input type="text" ref={this.myInput} placeholder="请输入今天的任务清单，按回车键确认" onKeyDown={(e) => this._handleEvent(e)} />
        </div>
    }
}
export default connect()(Head)






