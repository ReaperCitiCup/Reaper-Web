import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import NetValueLineChart from "../Chart/NetValueLineChart";
import RateLineChart from "../Chart/RateLineChart";
import AssetPieChart from "../Chart/AssetPieChart";
import AssertBarChart from "../Chart/AssertBarChart";
import DivHeader from '../Util/DivHeader';

import styles from './FundCharts.css';

function FundCharts() {
  return (
    <div className={"container " + styles.container}>
      <div className="card">
        <DivHeader>净值走势</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="单位净值走势" key="1">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="累计净值走势" key="2">
            <NetValueLineChart/>
          </TabPane>
        </Tabs>
      </div>

      <div className="card">
        <DivHeader>累积收益率走势</DivHeader>
        <RateLineChart/>
      </div>

      <div className="card">
        <DivHeader>资产配置</DivHeader>
        <div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>当前资产配置</h4>
            <AssetPieChart/>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>历史资产配置</h4>
            <AssertBarChart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundCharts;
