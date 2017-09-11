import React, {Component} from 'react';
import {Table, Icon} from 'antd';

const columns = [{
  title: '基金',
  dataIndex: 'fund1',
  key: 'fund1',
}, {
  title: '基金',
  dataIndex: 'fund2',
  key: 'fund2',
}, {
  title: '相关系数',
  dataIndex: 'value',
  key: 'value',
}];


function CorrelationCoefficientTable({chartData}) {
  let data = [];
  if (chartData) {
    // for (let i = 0; i < chartData.length; i++) {
    //   data.push({
    //     key: i + 1,
    //     fund1: chartData[i].fund1,
    //     fund2: chartData[i].fund2,
    //     value: chartData[i].value,
    //   })
    // }
    chartData.forEach((dataValue, index) => {
      data.push({
        key: index,
        fund1: dataValue.fund1,
        fund2: dataValue.fund2,
        value: dataValue.value,
      })
    })
  }
  // console.log(data);
  // else {
  //   data = [{
  //     key: 1,
  //     fund1: '000001 华夏成长',
  //     fund2: '000003 华夏蓝筹',
  //     value: '84.14'
  //   }, {
      {/*key: 2,*/}
      {/*fund1: '000001 华夏成长',*/}
      {/*fund2: '000003 华夏蓝筹',*/}
      {/*value: '12.49'*/}
    {/*}, {*/}
      {/*key: 3,*/}
      {/*fund1: '000001 华夏成长',*/}
      {/*fund2: '000003 华夏蓝筹',*/}
      {/*value: '39.51'*/}
    {/*}, {*/}
      {/*key: 4,*/}
      {/*fund1: '000001 华夏成长',*/}
      {/*fund2: '000003 华夏蓝筹',*/}
      {/*value: '41.04'*/}
    {/*}*/}
      {/*, {*/}
  //       key: 4,
  //       fund1: '000001 华夏成长',
  //       fund2: '000003 华夏蓝筹',
  //       value: '41.04'
  //     }];
  // }

  return (
    <Table columns={columns}
           dataSource={data}
           pagination={{pageSize: 4}}
    />
  )
}

export default CorrelationCoefficientTable;
