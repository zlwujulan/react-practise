import React from 'react';
import {connect} from 'react-redux';
import Info from './info';
import List from './list'
class Course extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            <List/>
       课程详情
        </div>
    }
}
export default connect() (Course)





  
