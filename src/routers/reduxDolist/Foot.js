import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import action from '../../store/action';
class Foot extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let {finishedCount,getRemoveFinishedItemAction,todos,getIsCheckedAll} =this.props
        return  <div className="todo-footer">
        <label>
            <input type="checkbox" checked={finishedCount ===todos.length} onChange={()=>getIsCheckedAll(finishedCount!==todos.length)}/>
        </label>
        <span>
    <span>已完成{finishedCount}件</span>/总计{todos.length}件
       </span>
        <Button type="primary" onClick={()=>getRemoveFinishedItemAction()}>清除已完成任务</Button>
    </div>
    }
}
export default connect(state=>({...state.dolist}),action.dolist)(Foot)






 