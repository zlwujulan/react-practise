import React from 'react';
import {connect} from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
// import {getVerifcode} from '../api/login.js'
 class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    componentWillMount(){
        // getVerifcode().then((data)=>{
        //     console.log(data)
        // })
    }
    render(){
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
        const onFinish = values => {
            console.log('Success:', values);
            let {history} = this.props;
            history.push('/home')
          };
        
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
            
          };
        return <div className="loginBox">
             <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
    }
}
export default connect() (Login)