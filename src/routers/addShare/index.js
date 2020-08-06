import React from 'react';
import { connect } from 'react-redux';
import { Upload, message,Button,Spin } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
class addShare extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            loading:false,
            file:'',
            contents:'',
            sping:false,
            imageUrl:'',
            fileList:''
        }
    }
    up = (file,fileList) => {
      this.setState({
        file:file.file,
        imageUrl:file.file.name
      })
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    };


    change=(e)=>{
      this.setState({
          [e.target.id]:e.target.value
      })
    }
    onSure=()=>{
       this.setState({sping:true})
       let {file,contents} = this.state;
       console.log(file,contents)
       setTimeout(()=>{
         this.setState({sping:false})
       },3000)
    }
    render() {
        const { imageUrl,sping ,fileList} = this.state;
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    fileList={fileList}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    customRequest={this.up}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                <div>
                    <h4>发布内容</h4>
                    <textarea style={{ width: "500px", height: "200px" }} id="contents" onChange={this.change}></textarea>
                </div>
                <Spin spinning={sping}>
                        <Button type="primary" shape="round" onClick={this.onSure}>发布</Button>
                </Spin>
            </div>
        )
    }
}
export default connect()(addShare)






