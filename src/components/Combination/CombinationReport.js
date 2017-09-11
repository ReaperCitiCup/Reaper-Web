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

import styles from "./CombinationReport.css";

const TabPane = Tabs.TabPane;

const columns = [{
  title: '基金代码',
  dataIndex: 'code',
}, {
  title: '基金名称',
  dataIndex: 'name',
}, {
  title: '持仓比率',
  dataIndex: 'positionRatio',
}, {
  title: '权重',
  dataIndex: 'weight',
}];

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
          positionRatio: c.positionRatio,
          weight: c.weight,
        })
      })
    }

    return (
      <div className="container">
        <div className={styles.report_body}>
          <h1>回测报告</h1>
          <h3>报告区间：
            <span>{combinationReport ? combinationReport.startDate : null}</span>
            —
            <span>{combinationReport ? combinationReport.endDate : null}</span>
          </h3>

          <div className="gutter-example" id={styles.grade_row}>
            <Row gutter={53}>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">综合评价&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.integratedScore}>
                    {combinationReport ? combinationReport.score : null}
                  </span>
                  &nbsp;&nbsp;分
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">超越同级&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.exceedProduct}>
                    {combinationReport ? combinationReport.transcendQuantity : null}
                  </span>
                  &nbsp;&nbsp;个产品
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">位列&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.ranking}>
                    {combinationReport ? combinationReport.rank : null}
                  </span>
                  &nbsp;&nbsp;名
                </div>
              </Col>
            </Row>
          </div>

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
                  <td>{combinationReport.intervalAnnualProfit}</td>
                  <td>{combinationReport.cumulativeProfit}</td>
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
                    <span> {combinationReport.intervalAnnualProfit} </span>
                  </td>
                </tr>
                <tr>
                  <td>风险表现</td>
                  <td>该基金组合报告区间的最大回撤为
                    <span> {combinationReport.maxRetracement} </span>，波动率为
                    <span> {combinationReport.volatility} </span></td>
                </tr>
                <tr>
                  <td>收益风险分析</td>
                  <td>该基金组合属于
                    <span> {combinationReport.investmentGoal} </span>
                  </td>
                </tr>
                <tr>
                  <td>风格分析</td>
                  <td>该组合的风格主要为
                    <span> {combinationReport.mainFactors.map((factor, index) => {
                      if (index === combinationReport.mainFactors.length - 1) {
                        return factor;
                      } else {
                        return factor + "，"
                      }
                    })} </span>
                  </td>
                </tr>
                <tr>
                  <td>业绩归因</td>
                  <td>股票类持仓总超额效益是
                    /**
                     * TODO
                     */
                    {/*<span> {combinationReport.brisonAttributionStock.filter(*/}
                    {/*brisonValue => brisonValue.field === '总超额收益')[0].value} </span>*/}
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


          </div>

          <div className={styles.section_6}>
            <DivHeader>风险情况</DivHeader>

            <div className={styles.chart}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="每日回撤走线图" key="1">
                  {combinationReport ?
                    <DoubleLineChart chartData={combinationReport.dailyRetracementTrend}/> : null}
                </TabPane>
                <TabPane tab="波动率" key="2">
                  {combinationReport ?
                    <DoubleLineChart chartData={combinationReport.volatilityTrend}/> : null}
                </TabPane>
                <TabPane tab="相关系数" key="3">
                  {combinationReport ?
                  <CorrelationCoefficientTable chartData={combinationReport.correlationCoefficientTable}/> : null}
                </TabPane>
              </Tabs>
            </div>

            <div className={styles.table}>
              <table>
                <tbody>
                <tr>
                  <th>项目</th>
                  <th>基金组合</th>
                </tr>
                <tr>
                  <td>最大回撤</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>最大单日跌幅</td>
                  <td>233</td>
                </tr>
                <tr>
                  <td>最大连跌天数</td>
                  <td>0.97</td>
                </tr>
                <tr>
                  <td>年化波动率</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Beta</td>
                  <td></td>
                </tr>
                <tr>
                  <td>在险价值 VaR</td>
                  <td></td>
                </tr>
                <tr>
                  <td>基金平均相关系数</td>
                  <td></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.section_7}>
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

          <div className={styles.section_8}>
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

          <div className={styles.section_9}>
            <DivHeader>Brison 归因</DivHeader>
            <Tabs defaultActiveKey="1">
              <TabPane tab="基于股票持仓" key="1">
                <div>
                  <div className={styles.section}>
                    <AttributionBarChart color="#81B6F5"/>
                  </div>
                  <div className={styles.section}>
                    <BrisonTable />
                  </div>
                </div>
              </TabPane>
              <TabPane tab="基于债券持仓" key="2">
                <div>
                  <div className={styles.section}>
                    <AttributionBarChart color="#81B6F5"/>
                  </div>
                  <div className={styles.section}>
                    <BrisonTable />
                  </div>
                </div>
              </TabPane>
            </Tabs>

          </div>


          <div className={styles.section_10}>
            <DivHeader>品种归因</DivHeader>
            <AttributionBarChart color="#E2827E"/>
          </div>


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
