import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd';
class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    async componentDidMount(){
                 
    }
    render(){
        return <div className="baseInfo">
            <video src="https://vdept.bdstatic.com/5946416a67794b3370364d6855506833/725870416d4e7156/4f0bfdbb6b149827d648d5f64d32e5882aee43727fb5266235f9dc35aabae9a52693a89586654f7ddc94a89ff5600506.mp4?auth_key=1596689789-0-0-40f90058ca4e4236d2c07d99c0a602c1" controls preload="none"></video>
            <div className="content">
                <h3>课程名称</h3>
                <p>课程描述</p>
                <span>课程价格：</span>
                <Button type="primary" danger>立即购买</Button> 
            </div>
        </div>
    }
}
export default connect() (Info)





  
