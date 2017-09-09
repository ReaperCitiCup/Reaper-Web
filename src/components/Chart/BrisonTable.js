import React, {Component} from 'react';
import {Table, Icon} from 'antd';

const columns = [{
  title: 'Field',
  dataIndex: 'field',
  key: 'field',
}, {
  title: 'Value',
  dataIndex: 'value',
  key: 'value',
}];

const data = [{
  key: 1,
  field: '资产配置效益',
  value: '12'
}, {
  key: 2,
  field: '债券配置效益',
  value: '12'
}, {
  key: 3,
  field: '交叉效益',
  value: '12'
},{
  key: 4,
  field: '总超额效益',
  value: '12'
}];


function BrisonTable() {
  return (
    <Table columns={columns}
           dataSource={data}
           showHeader={false}
           pagination={false}
           bordered={true}
    />
  )
}

export default BrisonTable;
