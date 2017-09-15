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
  {/*for (let i = 0; i < chartData.length; i++) {*/
  }
  //   data.push({
  //     key: i + 1,
  //     field: chartData[i].field,
  //     value: chartData[i].value,
  //   })
  // }

  if (chartData) {
    data.push({
      key: 1,
      project: '总收益率',
      combination: chartData.totalProfitRate.combination + '%',
      base: chartData.totalProfitRate.baseIndex + '%',
    });
    data.push({
      key: 2,
      project: '超额收益率',
      combination: chartData.overProfitRate.combination + '%',
      base: chartData.overProfitRate.baseIndex + '%',
    });
    data.push({
      key: 3,
      project: '年化收益',
      combination: chartData.annualProfit.combination + '%',
      base: chartData.annualProfit.baseIndex + '%',
    });
    data.push({
      key: 4,
      project: '盈利占天比',
      combination: chartData.profitDaysRatio.combination + '%',
      base: chartData.profitDaysRatio.baseIndex + '%',
    });
  }

  return (
    <Table columns={columns}
           dataSource={data}
           showHeader={true}
           pagination={false}
           bordered={true}
    />
  )
}

export default CombinationProfitTable;
