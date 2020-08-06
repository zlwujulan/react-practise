import React from 'react';
import {connect} from 'react-redux';
// localeProvide:国际化组件，目的是把组件汉化
import {localeProvide,Calendar,Icon,Button, Alert} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import '../static/antd.css'
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        // 只要localProvider包含的组件都是被汉化的
        return <div locale={zh_CN}>
         <Calendar></Calendar>
        </div>
    }
}
export default connect() (Home)





  
