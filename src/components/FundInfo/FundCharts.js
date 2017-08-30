import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import NetValueLineChart from "../Chart/NetValueLineChart";
import RateLineChart from "../Chart/RateLineChart";
import AssetPieChart from "../Chart/AssetPieChart";

import styles from './FundCharts.css';

function FundCharts() {
  return (
    <div className={"container " + styles.container}>
      <div className="card">
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
        <h3>累积收益率走势</h3>
        <RateLineChart/>
      </div>

      <div className="card">
        <h3>资产配置</h3>
        <div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>当前资产配置</h4>
            <AssetPieChart/>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>当前资产配置</h4>
            <AssetPieChart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundCharts;
