/**
 * Created by st on 2017/9/6.
 */
import React, {Component} from 'react';
import {connect} from 'dva';

import {Row, Col, Table, Tabs} from 'antd';

import DivHeader from "../Util/DivHeader";
import CompanyPieChart from "../Chart/CompanyPieChart";
import NetValueLineChart from "../Chart/NetValueLineChart";
import DoubleLineChart from "../Chart/DoubleLineChart";
import AttributionBarChart from "../Chart/AttributionBarChart";
import CorrelationCoefficientTable from "../Chart/CorrelationCoefficientTable";
import BrisonTable from "../Chart/BrisonTable";
import CombinationProfitTable from "../Chart/CombinationProfitTable";

import styles from "./CombinationReport.css";

const TabPane = Tabs.TabPane;

const columns = [{
  title: '基金代码',
  dataIndex: 'code',
}, {
  title: '基金名称',
  dataIndex: 'name',
}, {
  title: '权重',
  dataIndex: 'weight',
}];

const factorOptions = [
  {label: 'beta', value: 'beta'},
  {label: '价值', value: 'btop'},
  {label: '盈利能力', value: 'profit'},
  {label: '成长性', value: 'growth'},
  {label: '杠杆率', value: 'leverage'},
  {label: '流动性', value: 'liquidity'},
  {label: '动量', value: 'momentum'},
  {label: '非线性市值', value: 'nlsize'},
  {label: '波动率', value: 'volatility'},
  {label: '市值', value: 'size'},
];

class CombinationReport extends Component {
  render() {

    const {combinationReport} = this.props;
    const tableData = [];
    if (combinationReport) {
      combinationReport.combination.forEach(c => {
        tableData.push({
          key: c.code,
          code: c.code,
          name: c.name,
          weight: c.weight,
        })
      })
    }

    const combinationProfitTableData = combinationReport ? {
        totalProfitRate: combinationReport.totalProfitRate,
        overProfitRate: combinationReport.overProfitRate,
        annualProfit: combinationReport.annualProfit,
        profitDaysRatio: combinationReport.profitDaysRatio,
      } : null;

    return (
      <div className="container">
        <div className={styles.report_body}>
          <h1>回测报告</h1>
          <h3>报告区间：
            <span>{combinationReport ? combinationReport.startDate : null}</span>
            —
            <span>{combinationReport ? combinationReport.endDate : null}</span>
          </h3>

          {/*<div className="gutter-example" id={styles.grade_row}>*/}
          {/*<Row gutter={53}>*/}
          {/*<Col className="gutter-row" span={8}>*/}
          {/*<div className="gutter-box">综合评价&nbsp;&nbsp;*/}
          {/*<span className={styles.numberStyle} id={styles.integratedScore}>*/}
          {/*{combinationReport ? combinationReport.score : null}*/}
          {/*</span>*/}
          {/*&nbsp;&nbsp;分*/}
          {/*</div>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={8}>*/}
          {/*<div className="gutter-box">超越同级&nbsp;&nbsp;*/}
          {/*<span className={styles.numberStyle} id={styles.exceedProduct}>*/}
          {/*{combinationReport ? combinationReport.transcendQuantity : null}*/}
          {/*</span>*/}
          {/*&nbsp;&nbsp;个产品*/}
          {/*</div>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={8}>*/}
          {/*<div className="gutter-box">位列&nbsp;&nbsp;*/}
          {/*<span className={styles.numberStyle} id={styles.ranking}>*/}
          {/*{combinationReport ? combinationReport.rank : null}*/}
          {/*</span>*/}
          {/*&nbsp;&nbsp;名*/}
          {/*</div>*/}
          {/*</Col>*/}
          {/*</Row>*/}
          {/*</div>*/}

          <div className={styles.section_1}>
            <DivHeader>基本组成</DivHeader>

            <div className={styles.left}>
              {combinationReport ?
                <CompanyPieChart chartData={combinationReport.combination}/> : null}
            </div>
            <div className={styles.right}>
              <Table columns={columns} dataSource={tableData} size="middle" pagination={false}/>
            </div>
          </div>

          <div className={styles.section_2}>
            <DivHeader>投资目标</DivHeader>
            <p>{combinationReport ? combinationReport.investmentGoal : null}
            </p>
          </div>

          <div className={styles.section_3}>
            <DivHeader>基本表现</DivHeader>
            <table>
              <tbody>
              {combinationReport ?
                <tr className={styles.tr_num}>
                  <td>{combinationReport.intervalAnnualProfit}%</td>
                  <td>{combinationReport.cumulativeProfit}%</td>
                  <td>{combinationReport.finalNetValue}</td>
                  <td>{combinationReport.maxRetracement}</td>
                  <td>{combinationReport.sharpeRatio}</td>
                </tr> : null}
              <tr className={styles.tr_name}>
                <td>区间年化收益</td>
                <td>累计收益</td>
                <td>最新净值</td>
                <td>最大回撤</td>
                <td>夏普比率</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.section_4}>
            <DivHeader>总体评价</DivHeader>
            {combinationReport ?
              <table>
                <tbody>
                <tr>
                  <td>业绩表现</td>
                  <td>该基金组合报告区间的年化收益为
                    <span> {combinationReport.intervalAnnualProfit}%</span>
                  </td>
                </tr>
                <tr>
                  <td>风险表现</td>
                  <td>该基金组合报告区间的最大回撤为
                    <span> {combinationReport.maxRetracement} </span>，波动率为
                    <span> {combinationReport.volatility}% </span></td>
                </tr>
                <tr>
                  <td>收益风险分析</td>
                  <td>该基金组合属于
                    <span> {combinationReport.investmentGoal} </span>，风险收益比
                    <span> {combinationReport.sharpeRatio} </span>
                  </td>
                </tr>
                <tr>
                  <td>风格分析</td>
                  <td>该组合的风格主要为
                    {/*<span> {combinationReport.mainFactors.map((factor, index) => {*/}
                      {/*if (index === combinationReport.mainFactors.length - 1) {*/}
                        {/*return factorOptions.filter(option => option.value === factor)[0].label;*/}
                      {/*} else {*/}
                        {/*return factorOptions.filter(option => option.value === factor)[0].label + "，"*/}
                      {/*}*/}
                    {/*})} </span>*/}
                  </td>
                </tr>
                <tr>
                  <td>业绩归因</td>
                  <td>股票类持仓总超额效益是
                    {/*<span> {combinationReport.brisonAttributionStock.filter(*/}
                      {/*brisonValue => brisonValue.field === '总超额效益')[0].value.toFixed(2)}% </span>*/}
                    {/*，债券类持仓总超额效益是*/}
                    {/*<span> {combinationReport.brisonAttributionBond.filter(*/}
                    {/*brisonValue => brisonValue.field === '总超额收益')[0].value} </span>*/}
                  </td>
                </tr>
                </tbody>
              </table> : null}
          </div>

          <div className={styles.section_5}>
            <DivHeader>收益情况</DivHeader>

            <Tabs defaultActiveKey="1">
              <TabPane tab="累计净值" key="1">
                {combinationReport ?
                  <DoubleLineChart chartData={combinationReport.cumulativeNetValueTrend}/> : null}
              </TabPane>
              <TabPane tab="收益率" key="2">
                {combinationReport ?
                  <DoubleLineChart chartData={combinationReport.profitRateTrend}/> : null}
              </TabPane>
            </Tabs>

            <div className={styles.table}>
              <CombinationProfitTable chartData={combinationProfitTableData}/>
            </div>

          </div>

          <div className={styles.section_6}>
            <DivHeader>风险情况</DivHeader>

            <div className={styles.chart}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="每日回撤走线图" key="1">
                  {combinationReport ?
                    <DoubleLineChart chartData={combinationReport.dailyRetracementTrend}/> : null}
                </TabPane>
                {/*<TabPane tab="波动率" key="2">*/}
                {/*{combinationReport ?*/}
                {/*<DoubleLineChart chartData={combinationReport.volatilityTrend}/> : null}*/}
                {/*</TabPane>*/}
                <TabPane tab="相关系数" key="2">
                  {combinationReport ?
                    <CorrelationCoefficientTable chartData={combinationReport.correlationCoefficientTable}/> : null}
                </TabPane>
              </Tabs>
            </div>

            <div className={styles.table}>
              {combinationReport ?
                <table>
                  <tbody>
                  <tr>
                    <th>项目</th>
                    <th>基金组合</th>
                  </tr>
                  <tr>
                    <td>最大回撤</td>
                    <td>{combinationReport.maxRetracement}</td>
                  </tr>
                  <tr>
                    <td>最大单日跌幅</td>
                    <td>{combinationReport.maxDayDown}</td>
                  </tr>
                  <tr>
                    <td>最大连跌天数</td>
                    <td>{combinationReport.maxDownDays}</td>
                  </tr>
                  <tr>
                    <td>年化波动率</td>
                    <td>{combinationReport.annualVolatility}%</td>
                  </tr>
                  {/*<tr>*/}
                  {/*<td>Beta</td>*/}
                  {/*<td>{combinationReport.beta}</td>*/}
                  {/*</tr>*/}
                  <tr>
                    <td>在险价值 VaR</td>
                    <td>{combinationReport.var}</td>
                  </tr>
                  <tr>
                    <td>基金平均相关系数</td>
                    <td>{combinationReport.averageCorrelationCoefficient}</td>
                  </tr>
                  </tbody>
                </table> : null}
            </div>
          </div>

          {combinationReport && combinationReport.styleAttributionProfit && combinationReport.styleAttributionRisk && combinationReport.styleAttributionRisk.length > 0 ?
            <div className={styles.section_7}>
              <DivHeader>风格归因</DivHeader>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动收益</h4>
                {combinationReport ?
                  <AttributionBarChart chartData={combinationReport.styleAttributionProfit} color="#81B6F5"/> : null}
              </div>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动风险</h4>
                {combinationReport ?
                  <AttributionBarChart chartData={combinationReport.styleAttributionRisk} color="#F9D471"/> : null}
              </div>
            </div> : null}

          {combinationReport && combinationReport.industryAttributionProfit && combinationReport.industryAttributionRisk && combinationReport.industryAttributionRisk.length > 0 ?
            <div className={styles.section_8}>
              <DivHeader>行业归因</DivHeader>

              <div className={styles.section}>
                <h4 className={styles.section_title}>主动收益</h4>
                {combinationReport ?
                  <AttributionBarChart chartData={combinationReport.industryAttributionProfit} color="#81B6F5"/> : null}
              </div>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动风险</h4>
                {combinationReport ?
                  <AttributionBarChart chartData={combinationReport.industryAttributionRisk} color="#F9D471"/> : null}
              </div>
            </div> : null}

          {combinationReport && combinationReport.brisonAttributionStock && combinationReport.brisonAttributionStock.length > 0 ?
            <div className={styles.section_9}>
              <DivHeader>Brison 归因</DivHeader>
              <Tabs defaultActiveKey="1">
                {combinationReport && combinationReport.brisonAttributionStock ?
                  <TabPane tab="基于股票持仓" key="1">
                    <div>
                      <div className={styles.section}>
                        <AttributionBarChart chartData={combinationReport.brisonAttributionStock} color="#81B6F5"/>
                      </div>
                      <div className={styles.section}>
                        <BrisonTable chartData={combinationReport.brisonAttributionStock}/>
                      </div>
                    </div>
                  </TabPane> : null}
                {combinationReport && combinationReport.brisonAttributionBond ?
                  <TabPane tab="基于债券持仓" key="2">
                    <div>
                      <div className={styles.section}>
                        <AttributionBarChart chartData={combinationReport.brisonAttributionBond} color="#81B6F5"/>
                      </div>
                      <div className={styles.section}>
                        <BrisonTable chartData={combinationReport.brisonAttributionBond}/>
                      </div>
                    </div>
                  </TabPane> : null}
              </Tabs>
            </div> : null}


          {combinationReport && combinationReport.varietyAttribution && combinationReport.varietyAttribution.length > 0 ?
            <div className={styles.section_10}>
              <DivHeader>品种归因</DivHeader>
              <AttributionBarChart chartData={combinationReport.varietyAttribution} color="#E2827E"/>
            </div> : null}


        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.backTestModal.show,
    combinationReport: state.combination.combinationReport,
  };
}

export default connect(mapStateToProps)(CombinationReport);
