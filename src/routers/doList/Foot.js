import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
class Foot extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    static propTypes = {
        finishedCount: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        delCheckedTodo: PropTypes.func.isRequired,
        delSelectedAllTodo:PropTypes.func.isRequired //选中/取消 所有
    }
    render() {
        let {finishedCount,totalCount,delCheckedTodo,delSelectedAllTodo} =this.props
        return  <div className="todo-footer">
        <label>
            <input type="checkbox" checked={finishedCount ===totalCount} onChange={()=>delSelectedAllTodo(finishedCount!==totalCount)}/>
        </label>
        <span>
    <span>已完成{finishedCount}件</span>/总计{totalCount}件
       </span>
        <Button type="primary" onClick={()=>delCheckedTodo()}>清除已完成任务</Button>
    </div>
    }
}
export default connect()(Foot)






