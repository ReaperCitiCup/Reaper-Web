import React from 'react';
import {connect} from 'dva';
import {Tabs, Table} from 'antd';
const TabPane = Tabs.TabPane;

import NetValueLineChart from "../Chart/NetValueLineChart";
import RateLineChart from "../Chart/RateLineChart";
import AssetPieChart from "../Chart/AssetPieChart";
import AssetBarChart from "../Chart/AssetBarChart";
import DivHeader from '../Util/DivHeader';

import styles from './FundCharts.css';

const columns = [{
  title: '经理名称',
  dataIndex: 'managerName',
}, {
  title: '任职时间',
  dataIndex: 'workDate',
}, {
  title: '任职天数',
  dataIndex: 'workTime',
}, {
  title: '任期回报',
  dataIndex: 'returns',
}];

function FundCharts({
  unitNetValueData, cumulativeNetValueData,
  cumulativeProfitData, currentAssetData, fundManagers
}) {
  // console.log({cumulativeProfitData});
  const data = [];
  if (fundManagers) {
    fundManagers.forEach((manager, index) => {
      data.push({
        key: index,
        managerName: manager.name,
        workDate: manager.startDate + ' - ' + manager.endDate,
        workTime: manager.days,
        returns: manager.returns,
      })
    })
  }

  return (

    <div className={"container " + styles.container}>
      <div className="card">
        <DivHeader>净值走势</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="单位净值走势" key="1">
            {unitNetValueData ?
              <NetValueLineChart chartData={unitNetValueData}/> : null}
          </TabPane>
          <TabPane tab="累计净值走势" key="2">
            {cumulativeNetValueData ?
              <NetValueLineChart chartData={cumulativeNetValueData}/> : null}
          </TabPane>
        </Tabs>
      </div>

      <div className="card">
        <DivHeader>累积收益率走势</DivHeader>
        {cumulativeProfitData ?
          <div>
            <RateLineChart chartData={cumulativeProfitData}/>
          </div> : null}
      </div>

      <div className="card">
        <DivHeader>资产配置</DivHeader>
        <div className={styles.pie_chart}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>当前资产配置</h4>
            {currentAssetData ?
              <div>
                <AssetPieChart chartData={currentAssetData}/>
              </div> : null}
          </div>
          {/*<div className={styles.section}>*/}
          {/*<h4 className={styles.sectionTitle}>历史资产配置</h4>*/}
          {/*<AssertBarChart/>*/}
          {/*</div>*/}
        </div>
      </div>

      {fundManagers ?
        <div className={styles.previousFundManagerDiv}>
          <DivHeader>历任基金经理</DivHeader>
          <Table columns={columns} dataSource={data} size="middle" pagination={false}/>
        </div> : null}
    </div>
  )
}

FundCharts.propTypes = {};

function mapStateToProps(state) {
  return {
    unitNetValueData: state.fundChart.unitNetValueData,
    cumulativeNetValueData: state.fundChart.cumulativeNetValueData,
    cumulativeProfitData: state.fundChart.cumulativeProfitData,
    currentAssetData: state.fundChart.currentAssetData,
    fundManagers: state.fundChart.fundManagers,
  }
}

export default connect(mapStateToProps)(FundCharts);
