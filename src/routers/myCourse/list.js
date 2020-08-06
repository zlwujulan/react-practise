import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'
// 引入action
import action from '../../store/action/index';
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    // 
    // async componentDidMount(){
    //     let {queryBanner,bannerData} = this.props;
    //     if(!bannerData ||bannerData.length ===0){
    //         queryBanner(); //dispatch
    //     }
    // }
    render() {
        let { bannerData } = this.props
        return <div>
            {/* 轮播图 */}
            {bannerData && bannerData.length !== 0 ? <Carousel>....</Carousel> : ''}
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            {/* 数据列表 */}
            <div className="courseList">
                <h3>全部课程</h3>
                <ul>
                    <li>
                        <Link to={{pathname:'/home/info',search:'?courseId=1'}}>
                           <h3>react全栈开发课程第186课时</h3>
                           <div className="contnet">
                               <div className="pic">
                                   <img src="" alt=""/>
                               </div>
                               <div className="desc">
                                   <p>课程的描述</p>
                                   <p>时间：1小时</p>
                               </div>
                           </div>
                        </Link>
                       
                    </li>
                </ul>
            </div>
        </div>
    }
}
export default connect()(List)
// 从reducer娶到数据
// export default connect(state=>({...state.course}),action.course)(List)






