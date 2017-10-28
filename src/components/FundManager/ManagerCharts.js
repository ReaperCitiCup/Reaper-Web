/**
 * Created by st on 2017/9/1.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Table, Button, Tabs, Spin} from 'antd';
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

    const {
      managerFundRank, managerFundReturns, managerFundRateTrend,
      managerFundPerformance, managerPerformance, managerSocialNetwork
    } = this.props;

    // console.log(managerPerformance);
    return (
      <div>
        <div className={styles.fundPerformance}>
          <div className={styles.performanceLeft}>
            <DivHeader>现任基金排名</DivHeader>
            {managerFundRank ?
              <FundRankingBarChart chartData={managerFundRank}/> :
              <div className="loadingWrapper">
                <Spin tip="Loading..."/>
              </div>}
          </div>

          <div className={styles.performanceRight}>
            <DivHeader>现任基金收益</DivHeader>
            {managerFundReturns ?
              <FundProfitBarChart chartData={managerFundReturns}/> :
              <div className="loadingWrapper">
                <Spin tip="Loading..."/>
              </div>}
          </div>
        </div>

        <div className={styles.fundYieldTrend}>
          <DivHeader>现任基金收益率走势</DivHeader>
          {managerFundRateTrend ?
            <MultiLineChart chartData={managerFundRateTrend}/> :
            <div className="loadingWrapper">
              <Spin tip="Loading..."/>
            </div>}
        </div>

        <div className={styles.managerPerformanceDiv}>
          <div className={styles.previousPerformance}>
            <DivHeader>当前基金经理历任基金表现</DivHeader>
            {managerFundPerformance ?
              <ScatterChart chartData={managerFundPerformance}/> :
              <div className="loadingWrapper">
                <Spin tip="Loading..."/>
              </div>}
          </div>
          <div className={styles.integratedPerformance}>
            <DivHeader>当前基金经理综合表现</DivHeader>
            {managerPerformance ?
              <ScatterChart chartData={managerPerformance}/> :
              <div className="loadingWrapper">
                <Spin tip="Loading..."/>
              </div>}
          </div>
        </div>

        {managerSocialNetwork && managerSocialNetwork.nodes.length > 0 ?
          <div className={styles.networkChart}>
            <DivHeader>基金经理社会网络关系图</DivHeader>
            <NetworkChart chartData={managerSocialNetwork} type={'manager'}/>
          </div> : null}
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
    // managerFundRankTrend: state.fundManager.managerFundRankTrend,
    managerFundPerformance: state.fundManager.managerFundPerformance,
    managerPerformance: state.fundManager.managerPerformance,
    managerSocialNetwork: state.fundManager.managerSocialNetwork,
  };
}

export default connect(mapStateToProps)(ManagerCharts);

