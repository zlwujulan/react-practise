import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import List from './custom/List'
import Create from './custom/Create'
import Detail from './custom/Detail'
class Custom extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <section className="d-flex flex-row bd-highlight ">
            <ul className="nav flex-column w-25 p-3  bg-dark text-white">
                <li className="presentation">
                    <NavLink  to="/custom/list" className="nav-link">客户列表</NavLink>
                </li>
                <li className="presentation">
                    <NavLink to="/custom/create" className="nav-link">增加客户</NavLink>
                </li>
            </ul>
            {/* 右侧展示对应的内容：基于路由管理 */} 
            <div className="w-50 p-3">
                <Switch>
                    <Route path='/custom/list' component={List}/>
                    <Route path='/custom/create' component={Create}/>
                    <Route path='/custom/detail/:id' component={Detail}/>
                    {/* 进入到客户管理页面，我们让其默认展示就是list区域内容（第一种指定渲染组的操作也可以，重定向的方式也可以） */}
                    <Route from='/custom' to="/custom/list"/>
                </Switch>
            </div>
        </section>
    }
}
export default connect()(Custom);