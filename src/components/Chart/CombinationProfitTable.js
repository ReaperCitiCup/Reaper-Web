/**
 * Created by st on 2017/9/10.
 */
import React, {Component} from 'react';
import {Table, Icon} from 'antd';

const columns = [{
  title: '项目',
  dataIndex: 'project',
  key: 'project',
}, {
  title: '基金组合',
  dataIndex: 'combination',
  key: 'combination',
}, {
  title: '基准',
  dataIndex: 'base',
  key: 'base',
}];

// const data = [{
//   key: 1,
//   field: '资产配置效益',
//   value: '12'
// }, {
//   key: 2,
//   field: '债券配置效益',
//   value: '12'
// }, {
//   key: 3,
//   field: '交叉效益',
//   value: '12'
// }, {
//   key: 4,
//   field: '总超额效益',
//   value: '12'
// }];


function CombinationProfitTable({chartData}) {
  let data = [];
  for (let i = 0; i < chartData.length; i++) {
    data.push({
      key: i + 1,
      field: chartData[i].field,
      value: chartData[i].value,
    })
  }
  return (
    <Table columns={columns}
           dataSource={data}
           showHeader={false}
           pagination={false}
           bordered={true}
    />
  )
}

export default CombinationProfitTable;
