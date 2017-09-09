/**
 * Created by st on 2017/9/1.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Table, Button, Tabs} from 'antd';
import DivHeader from "../Util/DivHeader";

import ScatterChart from "../Chart/ScatterChart";
import NetworkChart from "../Chart/NetworkChart";
import FundRankingBarChart from "../Chart/FundRankingBarChart";
import FundProfitBarChart from "../Chart/FundProfitBarChart";
import MultiLineChart from "../Chart/MultiLineChart";
import FundRankLineChart from "../Chart/FundRankLineChart"

import styles from "./ManagerCharts.css";

const TabPane = Tabs.TabPane;

class ManagerCharts extends Component {
  render() {

    const {managerFundRank, managerFundReturns, managerFundRateTrend, managerFundRankTrend, managerFundPerformance, managerPerformance} = this.props;

    console.log(managerPerformance);
    return (
      <div>
        <div className={styles.fundPerformance}>
          <div className={styles.performanceLeft}>
            <DivHeader>现任基金排名</DivHeader>
            {managerFundRank ?
              <FundRankingBarChart chartData={managerFundRank}/> : null}
          </div>

          <div className={styles.performanceRight}>
            <DivHeader>现任基金收益</DivHeader>
            {managerFundReturns ?
              <FundProfitBarChart chartData={managerFundReturns}/> : null}
          </div>
        </div>

        <div className={styles.fundYieldTrend}>
          <div className="card">
            <Tabs defaultActiveKey="1">
              <TabPane tab="现任基金收益率走势" key="1">
                {managerFundRateTrend ?
                <MultiLineChart chartData={managerFundRateTrend}/> : null}
              </TabPane>
              <TabPane tab="现任基金排名走势" key="2">
                {managerFundRankTrend ?
                  <FundRankLineChart chartData={managerFundRankTrend}/> : null}
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div className={styles.previousFundManagerDiv}>
          <DivHeader>历任基金经理</DivHeader>
        </div>

        <div className={styles.managerPerformanceDiv}>
          <div className={styles.previousPerformance}>
            <DivHeader>当前基金经理历任基金表现</DivHeader>
            {managerFundPerformance ?
              <ScatterChart chartData={managerFundPerformance}/> : null}
          </div>
          <div className={styles.integratedPerformance}>
            <DivHeader>当前基金经理综合表现</DivHeader>
            {managerPerformance ?
            <ScatterChart chartData={managerPerformance}/> : null}
          </div>
        </div>

        <div className={styles.networkChart}>
          <DivHeader>基金经理社会网络关系图</DivHeader>
          <NetworkChart/>
        </div>
      </div>
    )
  }
}

ManagerCharts.propTypes = {};

function mapStateToProps(state) {
  return {
    managerFundRank: state.fundManager.managerFundRank,
    managerFundReturns: state.fundManager.managerFundReturns,
    managerFundRateTrend: state.fundManager.managerFundRateTrend,
    managerFundRankTrend: state.fundManager.managerFundRankTrend,
    managerFundPerformance: state.fundManager.managerFundPerformance,
    managerPerformance: state.fundManager.managerPerformance,
  };
}

export default connect(mapStateToProps)(ManagerCharts);

