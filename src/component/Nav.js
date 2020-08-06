import React from 'react';
import { connect } from 'react-redux';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import {Link,NavLink} from 'react-router-dom'
import {HashRouter,Switch,Route,Redirect,Link,NavLink} from 'react-router-dom'
import Home from '../routers/Home';
import Custom from '../routers/Custom';
import Plan from '../routers/Plan';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        const { Header, Sider, Content } = Layout;
        return <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">这里是logo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/home/index">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/home/create" >客户管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/home/plan">计划管理</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to="/home/addShare">添加分享</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              <Link to="/home/doList">事件处理</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              <Link to="/home/course">我的课程</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
              <Link to="/home/reduxDoList">reduxDolist</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          
          >
            {
              this.props.routes.map((route,key)=>{
                return <Route key={key} exact path={route.path} component={route.component}/>
              })
            }
        {/* <Switch>
         <Route path='/index' exact component={Home}/>
         <Route path='/index/custom'  component={Custom}/>
         <Route path='/plan'  component={Plan}/>
       </Switch> */}
         {/* {this.props.children} */}
          </Content>
        </Layout>
      </Layout>
        // ]<nav className="navbar navbar-default row bg-secondary text-white">
        //     <div className="container-fluid col-md-2">
        //         <Link to={{pathname:'/',search:'?lx=logo'}}>珠峰CRM</Link>
        //         {/* <a className="navbar-brand">珠峰CRM</a> */}
        //     </div>
        //     <div className="collapse show navbar-collapse col-md-10 text-white" >
        //         <ul className="nav">
        //             {/* navlink不是点击谁，谁有选中样式，而是当前页面hash后的地址和nav-link中的to进行比较，哪个匹配了，哪个才有选中的样式  */}
        //             <li className="nav-item"><NavLink to="/" exact className="nav-link">首页</NavLink></li>
        //             <li className="nav-item"><NavLink to="/custom" className="nav-link">客户管理</NavLink></li>
        //             <li className="nav-item"><NavLink to="/plan" className="nav-link" >计划管理</NavLink></li>
        //         </ul>
        //     </div>
        // </nav>
    }
}
export default connect()(Nav)