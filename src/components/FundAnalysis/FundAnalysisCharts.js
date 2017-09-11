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
import AssetBarChart from '../Chart/AssetBarChart';
import ScatterChart from '../Chart/ScatterChart';


import styles from './FundAnalysisCharts.css';

function FundAnalysisCharts({
  unitNetValueData, cumulativeProfitData, fundDailyRetracement, fundVolatility,
  fundValueAtRisk, fundDownsideVolatility, fundSharpeIndex, fundTreynorIndex,
  fundJensenIndex, fundStyleAttributionProfit, fundStyleAttributionRisk,
  fundIndustryAttributionProfit, fundIndustryAttributionRisk, fundStyleStabilityProfit,
  fundStyleStabilityRisk, fundVarietyAttribution, fundBrisonAttributionStock,
  fundBrisonAttributionBond, fundChooseTime, fundChooseStock, fundPublicOpinion,
  fundPerformanceAnalysis, managerPerformanceAnalysis, fundPerformanceIndex
}) {
  // console.log(fundBrisonAttributionBond);
  return (
    <div className={ styles.fund_analysis_chart}>

      <div className="card" id="1">
        <DivHeader>收益概览</DivHeader>
        <Tabs defaultActiveKey="1">
          <TabPane tab="收益率走势" key="1">
            {cumulativeProfitData ?
              <RateLineChart chartData={cumulativeProfitData}/> : null}
          </TabPane>
          <TabPane tab="单位净值" key="2">
            {unitNetValueData ?
              <NetValueLineChart chartData={unitNetValueData}/> : null}
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
          {/*<TabPane tab="信息比率" key="4">*/}
          {/*{fundInformationRatio ?*/}
          {/*<NetValueLineChart chartData={fundInformationRatio}/> : null}*/}
          {/*</TabPane>*/}
        </Tabs>
      </div>


      <div className="card" id="4">
        <DivHeader>业绩持续性指标</DivHeader>
        <p className={styles.description}>持续性指标为{fundPerformanceIndex ? fundPerformanceIndex.sustainabilityIndex : null}，
          连输期数／总期数为{fundPerformanceIndex ? fundPerformanceIndex.loseDayRatio : null}，
          连赢期数／总期数为{fundPerformanceIndex ? fundPerformanceIndex.winDayRatio : null}</p>
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
            {fundBrisonAttributionStock ?
              <div>
                <div className={styles.section}>
                  <AttributionBarChart chartData={fundBrisonAttributionStock} color="#81B6F5"/>
                </div>
                <div className={styles.section}>
                  <BrisonTable chartData={fundBrisonAttributionStock}/>
                </div>
              </div> : null}
          </TabPane>
          <TabPane tab="基于债券持仓" key="2">
            {fundBrisonAttributionBond ?
              <div>
                <div className={styles.section}>
                  <AttributionBarChart chartData={fundBrisonAttributionBond} color="#81B6F5"/>
                </div>
                <div className={styles.section}>
                  <BrisonTable chartData={fundBrisonAttributionBond}/>
                </div>
              </div> : null}
          </TabPane>
        </Tabs>

      </div>

      <div className="card" id="10">
        <DivHeader>品种归因</DivHeader>
        {fundVarietyAttribution ?
          <AttributionBarChart chartData={fundVarietyAttribution} color="#E2827E"/> : null}
      </div>

      <div className="card" id="11">
        <DivHeader>择时 | 择股能力</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>择时能力</h4>
          {fundChooseTime ?
            <AbilityBarChart chartData={fundChooseTime} color="#E2827E"/> : null}
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>择股能力</h4>
          {fundChooseStock ?
            <AbilityBarChart chartData={fundChooseStock} color="#E2827E"/> : null}
        </div>

      </div>

      <div className="card" id="12">
        <DivHeader>基金经理表现</DivHeader>

        <div className={styles.section}>
          <h4 className={styles.section_title}>当前基金经理历任基金表现</h4>
          {fundPerformanceAnalysis ?
            <ScatterChart chartData={fundPerformanceAnalysis}/> : null}
        </div>
        <div className={styles.section}>
          <h4 className={styles.section_title}>当前基金经理综合表现</h4>
          {managerPerformanceAnalysis ?
            <ScatterChart chartData={managerPerformanceAnalysis}/> : null}
        </div>

      </div>

      <div className="card" id="13">
        <DivHeader>舆情分析</DivHeader>
        {fundPublicOpinion ?
          <AssetBarChart chartData={fundPublicOpinion}/> : null}

      </div>
    </div>
  )
}

FundAnalysisCharts.propTypes = {};

function mapStateToProps(state) {
  return {
    unitNetValueData: state.fundChart.unitNetValueData,
    cumulativeProfitData: state.fundChart.cumulativeProfitData,
    // fundRiskTrend: state.fundAnalysisChart.fundRiskTrend,
    fundDailyRetracement: state.fundAnalysisChart.fundDailyRetracement,
    fundVolatility: state.fundAnalysisChart.fundVolatility,
    fundValueAtRisk: state.fundAnalysisChart.fundValueAtRisk,
    fundDownsideVolatility: state.fundAnalysisChart.fundDownsideVolatility,
    fundSharpeIndex: state.fundAnalysisChart.fundSharpeIndex,
    fundTreynorIndex: state.fundAnalysisChart.fundTreynorIndex,
    fundJensenIndex: state.fundAnalysisChart.fundJensenIndex,
    // fundInformationRatio: state.fundAnalysisChart.fundInformationRatio,
    fundStyleAttributionProfit: state.fundAnalysisChart.fundStyleAttributionProfit,
    fundStyleAttributionRisk: state.fundAnalysisChart.fundStyleAttributionRisk,
    fundIndustryAttributionProfit: state.fundAnalysisChart.fundIndustryAttributionProfit,
    fundIndustryAttributionRisk: state.fundAnalysisChart.fundIndustryAttributionRisk,
    fundStyleStabilityProfit: state.fundAnalysisChart.fundStyleStabilityProfit,
    fundStyleStabilityRisk: state.fundAnalysisChart.fundStyleStabilityRisk,
    fundVarietyAttribution: state.fundAnalysisChart.fundVarietyAttribution,
    fundBrisonAttributionStock: state.fundAnalysisChart.fundBrisonAttributionStock,
    fundBrisonAttributionBond: state.fundAnalysisChart.fundBrisonAttributionBond,
    fundChooseTime: state.fundAnalysisChart.fundChooseTime,
    fundChooseStock: state.fundAnalysisChart.fundChooseStock,
    fundPerformanceAnalysis: state.fundAnalysisChart.fundPerformanceAnalysis,
    managerPerformanceAnalysis: state.fundAnalysisChart.managerPerformanceAnalysis,
    fundPublicOpinion: state.fundAnalysisChart.fundPublicOpinion,
    fundPerformanceIndex: state.fundAnalysisChart.fundPerformanceIndex,
  };
}

export default connect(mapStateToProps)(FundAnalysisCharts);
