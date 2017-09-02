import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import DivHeader from '../Util/DivHeader';
import AttributionBarChart from'../Chart/AttributionBarChart';

import styles from './FundAnalysisCharts.css';

function FundAnalysisCharts() {
  return (
    <div className={ styles.fund_analysis_chart}>
      <div className={styles.title}>
        <h1>华夏成长</h1>
        <h2>000001</h2>
      </div>

      <div className="card" id="1">
        <DivHeader>收益 | 风险走势</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="收益率走势" key="1">

          </TabPane>
          <TabPane tab="风险走势" key="2">

          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="2">
        <DivHeader>风险概览</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="每日回撤" key="1">

          </TabPane>
          <TabPane tab="波动率" key="2">

          </TabPane>
          <TabPane tab="在险价值" key="3">

          </TabPane>
          <TabPane tab="下行波动率" key="4">

          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="3">
        <DivHeader>评价指标</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="夏普指标" key="1">

          </TabPane>
          <TabPane tab="特雷诺指标" key="2">

          </TabPane>
          <TabPane tab="詹森指标" key="3">

          </TabPane>
          <TabPane tab="信息比率" key="4">

          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="4">
        <DivHeader>仓位比例</DivHeader>
        <div>

        </div>
      </div>

      <div className="card" id="5">
        <DivHeader>业绩归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>配置收益</h4>
          <AttributionBarChart/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>管理收益</h4>
          <AttributionBarChart/>
        </div>

      </div>

      <div className="card" id="6">
        <DivHeader>风格归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          <AttributionBarChart/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          <AttributionBarChart/>
        </div>

      </div>

      <div className="card" id="7">
        <DivHeader>行业归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          <AttributionBarChart/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          <AttributionBarChart/>
        </div>

      </div>

      <div className="card" id="8">
        <DivHeader>风格稳定性</DivHeader>

      </div>

      <div className="card" id="9">
        <DivHeader>Brison 归因</DivHeader>

      </div>

      <div className="card" id="10">
        <DivHeader>利率曲线归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>品种归因</h4>
          <AttributionBarChart/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>能力归因</h4>
          <AttributionBarChart/>
        </div>

      </div>

      <div className="card" id="11">
        <DivHeader>择时 | 择股能力</DivHeader>

      </div>

      <div className="card" id="12">
        <DivHeader>基金经理表现</DivHeader>
      
      </div>
    </div>
  )
}

export default FundAnalysisCharts;
