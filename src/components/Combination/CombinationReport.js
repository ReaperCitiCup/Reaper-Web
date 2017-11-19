/**
 * Created by st on 2017/9/6.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import {Row, Col, Table, Tabs} from 'antd';

import DivHeader from "../Util/DivHeader";
import Loading from '../Util/Loading';
import CompanyPieChart from "../Chart/CompanyPieChart";
import NetValueLineChart from "../Chart/NetValueLineChart";
import DoubleLineChart from "../Chart/DoubleLineChart";
import DoubleYAxisChart from "../Chart/DoubleYAxisChart";
import FundFactorsHeatChart from '../Chart/FundFactorsHeatChart';
import AttributionBarChart from "../Chart/AttributionBarChart";
import CorrelationCoefficientTable from "../Chart/CorrelationCoefficientTable";
import BrisonTable from "../Chart/BrisonTable";
import CombinationProfitTable from "../Chart/CombinationProfitTable";
import saveIcon from '../../assets/save.png';

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
  {label: '波动率', value: 'residualvolatility'}
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
        <div className="report">
          <div className={styles.report_body}>
            <h1>回测报告</h1>
            <h3>报告区间：
              <span>{combinationReport ? combinationReport.startDate : null}</span>
              —
              <span>{combinationReport ? combinationReport.endDate : null}</span>
            </h3>
            {combinationReport ?
              <h3>
                <div onClick={
                  function () {
                    let node = document.getElementsByClassName('report')[0];
                    // let width = node.scrollWidth * 0.5;
                    // let height = node.scrollHeight * 0.5;
                    domtoimage.toBlob(node)
                      .then(function (blob) {
                          FileSaver.saveAs(blob, '回测报告.png');
                        }
                      );
                  }
                }>
                  <img src={saveIcon} width={25}/>
                  <span>保存报告</span>
                </div>
              </h3> : null}

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
                  <CompanyPieChart chartData={combinationReport.combination}/> : <Loading/>}
              </div>
              <div className={styles.right}>
                <Table columns={columns} dataSource={tableData} size="middle" pagination={false}/>
              </div>
            </div>

            <div className={styles.section_2}>
              <DivHeader>投资目标</DivHeader>
              {combinationReport ?
                <p>{combinationReport.investmentGoal}
                </p> : <Loading/>}
            </div>

            <div className={styles.section_3}>
              <DivHeader>基本表现</DivHeader>
              {combinationReport ?
                <div>
                  <table>
                    <tbody>
                    <tr className={styles.tr_num}>
                      <td>{combinationReport.intervalAnnualProfit.toFixed(2)}%</td>
                      <td>{combinationReport.cumulativeProfit.toFixed(2)}%</td>
                      <td>{combinationReport.finalNetValue.toFixed(2)}</td>
                      <td>{combinationReport.maxRetracement.toFixed(2)}</td>
                      <td>{combinationReport.sharpeRatio.toFixed(2)}</td>
                    </tr>
                    <tr className={styles.tr_name}>
                      <td>区间年化收益</td>
                      <td>累计收益</td>
                      <td>最新净值</td>
                      <td>最大回撤</td>
                      <td>夏普比率</td>
                    </tr>
                    </tbody>
                  </table>
                </div> : <Loading/>}
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
                      <span> {combinationReport.sharpeRatio.toFixed(2)} </span>
                    </td>
                  </tr>
                  <tr>
                    <td>风格分析</td>
                    <td>该组合的风格主要为
                      <span>
                      {combinationReport.mainFactors.map((factor, index) => {
                        if (index === combinationReport.mainFactors.length - 1) {
                          return factorOptions.filter(option => option.value === factor)[0].label;
                        } else {
                          return factorOptions.filter(option => option.value === factor)[0].label + "，"
                        }
                      })} </span>
                    </td>
                  </tr>
                  {/*<tr>*/}
                  {/*<td>业绩归因</td>*/}
                  {/*<td>股票类持仓总超额效益是*/}
                  {/*<span> {combinationReport.brisonAttributionStock.filter(*/}
                  {/*brisonValue => brisonValue.field === '总超额效益')[0].value.toFixed(2)}% </span>*/}
                  {/*，债券类持仓总超额效益是*/}
                  {/*<span> {combinationReport.brisonAttributionBond.filter(*/}
                  {/*brisonValue => brisonValue.field === '总超额收益')[0].value} </span>*/}
                  {/*</td>*/}
                  {/*</tr>*/}
                  </tbody>
                </table> : <Loading/>}
            </div>

            <div className={styles.section_5}>
              <DivHeader>收益情况</DivHeader>

              <Tabs defaultActiveKey="1">
                <TabPane tab="累计净值" key="1">
                  {combinationReport ?
                    <DoubleYAxisChart chartData={combinationReport.cumulativeNetValueTrend}/> : <Loading/>}
                </TabPane>
                <TabPane tab="收益率" key="2">
                  {combinationReport ?
                    <DoubleLineChart chartData={combinationReport.profitRateTrend}/> : <Loading/>}
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
                      <DoubleLineChart chartData={combinationReport.dailyRetracementTrend}/> : <Loading/>}
                  </TabPane>
                  {/*<TabPane tab="波动率" key="2">*/}
                  {/*{combinationReport ?*/}
                  {/*<DoubleLineChart chartData={combinationReport.volatilityTrend}/> : null}*/}
                  {/*</TabPane>*/}
                  <TabPane tab="相关系数" key="2">
                    {combinationReport ?
                      <CorrelationCoefficientTable chartData={combinationReport.correlationCoefficientTable}/> :
                      <Loading/>}
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
                  </table> : <Loading/>}
              </div>
            </div>


            <div className={styles.section_5}>
              <DivHeader>因子暴露</DivHeader>
              {combinationReport ?
                <FundFactorsHeatChart chartData={combinationReport.fundFactorsHeat}/>
                : <Loading/>}
            </div>


            {combinationReport && combinationReport.styleAttributionProfit && combinationReport.styleAttributionRisk && combinationReport.styleAttributionProfit.length > 0 && combinationReport.styleAttributionRisk.length > 0 ?
              <div className={styles.section_7}>
                <DivHeader>风格归因</DivHeader>
                <div className={styles.section}>
                  <h4 className={styles.section_title}>主动收益</h4>
                  {combinationReport ?
                    <AttributionBarChart chartData={combinationReport.styleAttributionProfit} color="#81B6F5"/> :
                    <Loading/>}
                </div>
                <div className={styles.section}>
                  <h4 className={styles.section_title}>主动风险</h4>
                  {combinationReport ?
                    <AttributionBarChart chartData={combinationReport.styleAttributionRisk} color="#F9D471"/> :
                    <Loading/>}
                </div>
              </div> : null}

            {combinationReport && combinationReport.industryAttributionProfit && combinationReport.industryAttributionRisk && combinationReport.industryAttributionProfit.length > 0 && combinationReport.industryAttributionRisk.length > 0 ?
              <div className={styles.section_8}>
                <DivHeader>行业归因</DivHeader>

                <div className={styles.section}>
                  <h4 className={styles.section_title}>主动收益</h4>
                  {combinationReport ?
                    <AttributionBarChart chartData={combinationReport.industryAttributionProfit} color="#81B6F5"/> :
                    <Loading/>}
                </div>
                <div className={styles.section}>
                  <h4 className={styles.section_title}>主动风险</h4>
                  {combinationReport ?
                    <AttributionBarChart chartData={combinationReport.industryAttributionRisk} color="#F9D471"/> :
                    <Loading/>}
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
                    </TabPane> : <Loading/>}
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
                    </TabPane> : <Loading/>}
                </Tabs>
              </div> : null}


            {combinationReport && combinationReport.varietyAttribution && combinationReport.varietyAttribution.length > 0 ?
              <div className={styles.section_10}>
                <DivHeader>品种归因</DivHeader>
                <AttributionBarChart chartData={combinationReport.varietyAttribution} color="#E2827E"/>
              </div> : null}

            <div className={styles.section_11}>
              <DivHeader>相关指标说明</DivHeader>
              <p>
                <span>区间年化收益</span>
                <br/>在投资一段时间内的收益，假定一年都是这个水平，折算的年收益率。
                <br/><br/>
              </p>
              <p>
                <span>Beta</span>
                <br/>一种风险度量指标(Beta系数)，度量市场的变化对股票或组合收益率变化的影响程度，反映股票或组合对于市场的敏感程度(系统性风险)。
                <br/><br/>
              </p>
              <p>
                <span>最大回撤</span>
                <br/>在选定周期内任一历史时点往后推，产品净值走到最低点时的收益率回撤幅度的最大值。最大回撤用来描述在任意时点买入产品后，可能出现的最大亏损幅度。最大回撤是一个重要的风险指标，该指标越小越好。
                <br/><br/>
              </p>
              <p>
                <span>在险价值</span>
                <br/>基于过去交易日的收益序列，找到排序在倒数1%的收益；一般被称为“在险价值”，是指在一定的置信水平下(在本系统中置信水平取99%)，基金或组合在未来一段时间内(在本系统中取10个交易日)的最大可能损失比例。属于风险指标，该值越小越好。
                <br/><br/>
              </p>
              <p>
                <span>夏普比率</span>
                <br/>Sharpe
                Ratio=(rp-rf)/σp，超额收益与组合标准差的比值，rp是基金的年化收益，rf为无风险利率，本系统用固定的3%。夏普比率是一个可以同时对收益和风险加以考虑的综合指标，反映每单位风险的超额收益，该指标越大越好。
              </p>
            </div>

            <div className={styles.section_12}>
              <DivHeader>免责申明</DivHeader>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                基金组合分析技术由FOF-Navigator系统提供给用户使用。
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                所涉及的内容均由客观数据和模型计算得来，仅供参考，不构成对所述资产管理计划、契约型基金、证券或产品的出价、征价、要约或要约邀请，不构成任何合同或承诺的基础，不构成买卖任何投资工具或者达成任何交易的推荐，亦不构成财务、法律、税务、投资建议、投资咨询意见或其他意见，对任何因直接或间接使用本报告涉及的信息和内容或者据此进行投资所造成的一切后果或损失，系统开发者不承担任何法律责任。
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                本报告中提及的数据及信息以及这些投资带来的收入可能会波动。过去的表现并不代表未来的表现，未来的回报也无法保证，投资者可能会损失本金。外汇汇率波动有可能对某些投资的价值或价格或来自这一投资的收入产生不良影响。因其包括重大的市场风险，因此并不适合所有投资者。在任何情况下，本公司不对任何人因使用本报告中的任何内容所引致的任何损失负任何责任，投资者自主作出投资决策并自行承担投资风险。
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本报告的数据内容版权归相关内容提供方所有，未经事先许可，任何人不得以任何方式或方法修改、翻版、分发、转载、复制、发表、许可或仿制本报告。
              </p>
            </div>
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
