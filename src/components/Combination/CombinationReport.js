/**
 * Created by st on 2017/9/6.
 */
import React, {Component} from 'react';

import {Row, Col, Table, Tabs} from 'antd';

import DivHeader from "../Util/DivHeader";
import AssetPieChart from "../Chart/AssetPieChart";
import NetValueLineChart from "../Chart/NetValueLineChart";
import AttributionBarChart from "../Chart/AttributionBarChart";
import CorrelationCoefficientTable from "../Chart/CorrelationCoefficientTable";
import BrisonTable from "../Chart/BrisonTable";

import styles from "./CombinationReport.css";

const TabPane = Tabs.TabPane;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


class CombinationReport extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.report_body}>
          <h1>回测报告</h1>
          <h3>报告区间：
            <span>2016年12月29日</span>
            —
            <span>2017年08月31日</span>
          </h3>

          <div className="gutter-example" id={styles.grade_row}>
            <Row gutter={53}>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">综合评价&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.integratedScore}>96</span>
                  &nbsp;&nbsp;分
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">超越同级&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.exceedProduct}>128</span>
                  &nbsp;&nbsp;个产品
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">位列&nbsp;&nbsp;
                  <span className={styles.numberStyle} id={styles.ranking}>12</span>
                  &nbsp;&nbsp;名
                </div>
              </Col>
            </Row>
          </div>

          <div className={styles.section_1}>
            <DivHeader>基本组成</DivHeader>

            <div className={styles.left}>
              <AssetPieChart/>
            </div>
            <div className={styles.right}>
              <Table columns={columns} dataSource={data} size="middle" pagination={false}/>
            </div>
          </div>

          <div className={styles.section_2}>
            <DivHeader>投资目标</DivHeader>
            <p>高中低风险/收益
            </p>
          </div>

          <div className={styles.section_3}>
            <DivHeader>基本表现</DivHeader>
            <table>
              <tbody>
              <tr className={styles.tr_num}>
                <td>58.92%</td>
                <td>119.37%</td>
                <td>6.66</td>
                <td>6.61%</td>
                <td>0.64</td>
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
          </div>

          <div className={styles.section_4}>
            <DivHeader>总体评价</DivHeader>
            <table>
              <tbody>
              <tr>
                <td>业绩表现</td>
                <td>该基金组合报告区间的年化收益为66.6%，排名66</td>
              </tr>
              <tr>
                <td>风险表现</td>
                <td>该基金组合报告区间的最大回撤为6.61%，波动率为23.3%，排名233</td>
              </tr>
              <tr>
                <td>收益风险分析</td>
                <td>该基金组合属于高风险，低收益，风险收益比0.97</td>
              </tr>
              <tr>
                <td>风格分析</td>
                <td></td>
              </tr>
              <tr>
                <td>业绩归因</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.section_5}>
            <DivHeader>收益情况</DivHeader>

            <Tabs defaultActiveKey="1">
              <TabPane tab="累计净值" key="1">
                <NetValueLineChart/>
              </TabPane>
              <TabPane tab="收益率" key="2">
                <NetValueLineChart/>
              </TabPane>
            </Tabs>


          </div>

          <div className={styles.section_6}>
            <DivHeader>风险情况</DivHeader>

            <div className={styles.chart}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="每日回撤走线图" key="1">
                  <NetValueLineChart/>
                </TabPane>
                <TabPane tab="波动率" key="2">
                  <NetValueLineChart/>
                </TabPane>
                <TabPane tab="相关系数" key="3">
                  <CorrelationCoefficientTable/>
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

export default CombinationReport;
