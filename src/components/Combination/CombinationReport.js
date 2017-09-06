/**
 * Created by st on 2017/9/6.
 */
import React, {Component} from 'react';
import styles from "./CombinationReport.css";
import {Row, Col, Table} from 'antd';


import DivHeader from "../Util/DivHeader";
import AssetPieChart from "../Chart/AssetPieChart";

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

        </div>
      </div>
    )
  }
}

export default CombinationReport;
