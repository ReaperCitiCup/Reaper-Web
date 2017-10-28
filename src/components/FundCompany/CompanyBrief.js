/**
 * Created by st on 2017/8/31.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Spin} from 'antd';
import styles from './CompanyBrief.css';
import DivHeader from '../Util/DivHeader';
import Loading from '../Util/Loading'

import CompanyPieChart from '../Chart/CompanyPieChart';
import AttributionBarChart from '../Chart/AttributionBarChart';
import ScatterChart from '../Chart/ScatterChart';

class CompanyBrief extends Component {
  render() {
    const {companyName, fundPerformance, managerPerformance, productStrategy, assetAllocation, styleAttributionProfit, styleAttributionRisk, industryAttributionProfit, industryAttributionRisk} = this.props;
    // console.log(productStrategy);
    return (
      <div className={"container " + styles.brief}>
        <div className={styles.title}>
          <h1>{companyName ? companyName : null}</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.section_a}>
            <DivHeader>公司旗下基金表现</DivHeader>
            {fundPerformance ?
              <ScatterChart chartData={fundPerformance}/> :
              <Loading/>}
          </div>
          <div className={styles.section_b}>
            <DivHeader>公司旗下基金经理表现</DivHeader>
            {managerPerformance ?
              <ScatterChart chartData={managerPerformance}/> :
              <Loading/>}
          </div>
          <div className={styles.section_c}>
            {/*<DivHeader>产品策略分布</DivHeader>*/}
            {/*{productStrategy ?*/}
            {/*<CompanyPieChart chartData={productStrategy}/> : null}*/}
            {/*</div>*/}
            {/*<div className={styles.section_b}>*/}
            <DivHeader>资产配置行业占比</DivHeader>
            {assetAllocation ?
              <CompanyPieChart chartData={assetAllocation}/> :
              <Loading/>}
          </div>
          {styleAttributionProfit ?
            <div className={styles.section_c}>
              <DivHeader>风格归因</DivHeader>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动收益</h4>
                {styleAttributionProfit ?
                  <AttributionBarChart color="#81B6F5" chartData={styleAttributionProfit}/> :
                  <Loading/>}
              </div>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动风险</h4>
                {styleAttributionRisk ?
                  <AttributionBarChart color="#F9D471" chartData={styleAttributionRisk}/> :
                  <Loading/>}
              </div>
            </div> :
            <Loading/>}
          {industryAttributionProfit ?
            <div className={styles.section_c}>
              <DivHeader>行业归因</DivHeader>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动收益</h4>
                {industryAttributionProfit ?
                  <AttributionBarChart color="#81B6F5" chartData={industryAttributionProfit}/> :
                  <Loading/>}
              </div>
              <div className={styles.section}>
                <h4 className={styles.section_title}>主动风险</h4>
                {industryAttributionRisk ?
                  <AttributionBarChart color="#F9D471" chartData={industryAttributionRisk}/> :
                  <Loading/>}
              </div>
            </div> : <Loading/>}
        </div>
      </div>
    )
  }
}

CompanyBrief.propTypes = {};

function mapStateToProps(state) {
  return {
    companyName: state.fundCompany.companyName,
    fundPerformance: state.fundCompany.fundPerformance,
    managerPerformance: state.fundCompany.managerPerformance,
    productStrategy: state.fundCompany.productStrategy,
    assetAllocation: state.fundCompany.assetAllocation,
    styleAttributionProfit: state.fundCompany.styleAttributionProfit,
    styleAttributionRisk: state.fundCompany.styleAttributionRisk,
    industryAttributionProfit: state.fundCompany.industryAttributionProfit,
    industryAttributionRisk: state.fundCompany.industryAttributionRisk,
  };
}

export default connect(mapStateToProps)(CompanyBrief);
