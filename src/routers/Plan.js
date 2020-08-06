import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
class Plan extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedRowKeys: [],
            isLoad:false
        }
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
        ];
        const data = [];  
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        
        }

        const { selectedRowKeys } = this.state;
    
        return <div>
            <Table  columns={columns} dataSource={data} loading={this.state.isLoad}/>
        </div>
    }
}
export default connect()(Plan)