import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import DivHeader from '../Util/DivHeader';
import RateLineChart from "../Chart/RateLineChart";
import NetValueLineChart from "../Chart/NetValueLineChart";
import AttributionBarChart from'../Chart/AttributionBarChart';
import AbilityBarChart from'../Chart/AbilityBarChart';
import StabilityRadarChart from'../Chart/StabilityRadarChart';
import BrisonTable from'../Chart/BrisonTable';


import styles from './FundAnalysisCharts.css';

function FundAnalysisCharts() {
  return (
    <div className={ styles.fund_analysis_chart}>

      <div className="card" id="1">
        <DivHeader>收益 | 风险走势</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="收益率走势" key="1">
            <RateLineChart/>
          </TabPane>
          <TabPane tab="风险走势" key="2">
            <NetValueLineChart/>
          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="2">
        <DivHeader>风险概览</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="每日回撤" key="1">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="波动率" key="2">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="在险价值" key="3">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="下行波动率" key="4">
            <NetValueLineChart/>
          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="3">
        <DivHeader>评价指标</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="夏普指标" key="1">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="特雷诺指标" key="2">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="詹森指标" key="3">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="信息比率" key="4">
            <NetValueLineChart/>
          </TabPane>
        </Tabs>
      </div>


      <div className="card" id="6">
        <DivHeader>风格归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          <AttributionBarChart color="#81B6F5"/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          <AttributionBarChart color="#F9D471"/>
        </div>

      </div>

      <div className="card" id="7">
        <DivHeader>行业归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          <AttributionBarChart color="#81B6F5"/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          <AttributionBarChart color="#F9D471"/>
        </div>

      </div>

      <div className="card" id="8">
        <DivHeader>风格稳定性</DivHeader>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          <StabilityRadarChart/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          <StabilityRadarChart/>
        </div>
      </div>

      <div className="card" id="9">
        <DivHeader>Brison 归因</DivHeader>


        <Tabs defaultActiveKey="1">
          <TabPane tab="基于股票持仓" key="1">
            <div className={styles.section}>
              <AttributionBarChart color="#81B6F5"/>
            </div>
            <div className={styles.section}>
             <BrisonTable/>
            </div>
          </TabPane>
          <TabPane tab="基于债券持仓" key="2">

          </TabPane>
        </Tabs>

      </div>

      <div className="card" id="10">
        <DivHeader>品种归因</DivHeader>
        <AttributionBarChart color="#E2827E"/>
      </div>

      <div className="card" id="11">
        <DivHeader>择时 | 择股能力</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>品种归因</h4>
          <AbilityBarChart color="#E2827E"/>
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>能力归因</h4>
          <AbilityBarChart color="#E2827E"/>
        </div>

      </div>

      <div className="card" id="12">
        <DivHeader>基金经理表现</DivHeader>

      </div>
    </div>
  )
}

export default FundAnalysisCharts;
