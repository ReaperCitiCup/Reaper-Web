import React from 'react';
import {connect} from 'dva';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import NetValueLineChart from "../Chart/NetValueLineChart";
import RateLineChart from "../Chart/RateLineChart";
import AssetPieChart from "../Chart/AssetPieChart";
import AssertBarChart from "../Chart/AssertBarChart";
import DivHeader from '../Util/DivHeader';

import styles from './FundCharts.css';

function FundCharts({unitNetValueData, cumulativeNetValueData, cumulativeProfitData, currentAssetData}) {
  // console.log({unitNetValueData});
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
    </div>
  )
}

FundCharts.propTypes = {};

function mapStateToProps(state) {
  return {
    unitNetValueData: state.fundChart.unitNetValueData,
    cumulativeNetValueData: state.fundChart.cumulativeNetValueData,
    cumulativeProfitData: state.fundChart.cumulativeProfitData,
    currentAssetData: state.fundChart.currentAssetData
  };
}

export default connect(mapStateToProps)(FundCharts);
