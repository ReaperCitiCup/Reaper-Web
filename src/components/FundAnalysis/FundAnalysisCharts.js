import React from 'react';
import {connect} from 'dva';
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

function FundAnalysisCharts({
  cumulativeProfitData, fundRiskTrend, fundDailyRetracement, fundVolatility,
  fundValueAtRisk, fundDownsideVolatility, fundSharpeIndex, fundTreynorIndex,
  fundJensenIndex, fundInformationRatio, fundStyleAttributionProfit, fundStyleAttributionRisk,
  fundIndustryAttributionProfit, fundIndustryAttributionRisk, fundStyleStabilityProfit,
  fundStyleStabilityRisk
}) {
  return (
    <div className={ styles.fund_analysis_chart}>

      <div className="card" id="1">
        <DivHeader>收益 | 风险走势</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="收益率走势" key="1">
            {cumulativeProfitData ?
              <RateLineChart chartData={cumulativeProfitData}/> : null}
          </TabPane>
          <TabPane tab="风险走势" key="2">
            {fundRiskTrend ?
              <NetValueLineChart chartData={fundRiskTrend}/> : null}
          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="2">
        <DivHeader>风险概览</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="每日回撤" key="1">
            {fundDailyRetracement ?
              <NetValueLineChart chartData={fundDailyRetracement}/> : null}
          </TabPane>
          <TabPane tab="波动率" key="2">
            {fundVolatility ?
              <NetValueLineChart chartData={fundVolatility}/> : null}
          </TabPane>
          <TabPane tab="在险价值" key="3">
            {fundValueAtRisk ?
              <NetValueLineChart chartData={fundValueAtRisk}/> : null}
          </TabPane>
          <TabPane tab="下行波动率" key="4">
            {fundDownsideVolatility ?
              <NetValueLineChart chartData={fundDownsideVolatility}/> : null}
          </TabPane>
        </Tabs>
      </div>

      <div className="card" id="3">
        <DivHeader>评价指标</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="夏普指标" key="1">
            {fundSharpeIndex ?
              <NetValueLineChart chartData={fundSharpeIndex}/> : null}
          </TabPane>
          <TabPane tab="特雷诺指标" key="2">
            {fundTreynorIndex ?
              <NetValueLineChart chartData={fundTreynorIndex}/> : null}
          </TabPane>
          <TabPane tab="詹森指标" key="3">
            {fundJensenIndex ?
              <NetValueLineChart chartData={fundJensenIndex}/> : null}
          </TabPane>
          <TabPane tab="业绩持续性指标" key="4">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="信息比率" key="5">
            {fundInformationRatio ?
              <NetValueLineChart chartData={fundInformationRatio}/> : null}
          </TabPane>
        </Tabs>
      </div>


      <div className="card" id="6">
        <DivHeader>风格归因</DivHeader>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          {fundStyleAttributionProfit ?
            <AttributionBarChart chartData={fundStyleAttributionProfit} color="#81B6F5"/> : null}
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          {fundStyleAttributionRisk ?
            <AttributionBarChart chartData={fundStyleAttributionRisk} color="#F9D471"/> : null}
        </div>

      </div>

      <div className="card" id="7">
        <DivHeader>行业归因</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          {fundIndustryAttributionProfit ?
            <AttributionBarChart chartData={fundIndustryAttributionProfit} color="#81B6F5"/> : null}
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          {fundIndustryAttributionRisk ?
            <AttributionBarChart chartData={fundIndustryAttributionRisk} color="#F9D471"/> : null}
        </div>

      </div>

      <div className="card" id="8">
        <DivHeader>风格稳定性</DivHeader>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动收益</h4>
          {fundStyleStabilityProfit ?
            <StabilityRadarChart chartData={fundStyleStabilityProfit}/> : null}
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>主动风险</h4>
          {fundStyleStabilityRisk ?
            <StabilityRadarChart chartData={fundStyleStabilityRisk}/> : null}
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

FundAnalysisCharts.propTypes = {};

function mapStateToProps(state) {
  return {
    cumulativeProfitData: state.fundChart.cumulativeProfitData,
    fundRiskTrend: state.fundAnalysisChart.fundRiskTrend,
    fundDailyRetracement: state.fundAnalysisChart.fundDailyRetracement,
    fundVolatility: state.fundAnalysisChart.fundVolatility,
    fundValueAtRisk: state.fundAnalysisChart.fundValueAtRisk,
    fundDownsideVolatility: state.fundAnalysisChart.fundDownsideVolatility,
    fundSharpeIndex: state.fundAnalysisChart.fundSharpeIndex,
    fundTreynorIndex: state.fundAnalysisChart.fundTreynorIndex,
    fundJensenIndex: state.fundAnalysisChart.fundJensenIndex,
    fundInformationRatio: state.fundAnalysisChart.fundInformationRatio,
    fundStyleAttributionProfit: state.fundAnalysisChart.fundStyleAttributionProfit,
    fundStyleAttributionRisk: state.fundAnalysisChart.fundStyleAttributionRisk,
    fundIndustryAttributionProfit: state.fundAnalysisChart.fundIndustryAttributionProfit,
    fundIndustryAttributionRisk: state.fundAnalysisChart.fundIndustryAttributionRisk,
    fundStyleStabilityProfit: state.fundAnalysisChart.fundStyleStabilityProfit,
    fundStyleStabilityRisk: state.fundAnalysisChart.fundStyleStabilityRisk,

  };
}

export default connect(mapStateToProps)(FundAnalysisCharts);
