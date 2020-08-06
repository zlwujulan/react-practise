import React from 'react';
import { connect } from 'react-redux';
// localeProvide:国际化组件，目的是把组件汉化
// import { Anchor } from 'antd';
// import {Link} from 'react-router-dom'
import '../static/antd.css'
// const { Link } = Anchor;
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        // 只要localProvider包含的组件都是被汉化的
        return <div>
            北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟，置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；
            背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南
        </div>
    }
}
export default connect()(Home)






