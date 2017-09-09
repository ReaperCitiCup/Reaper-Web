/**
 * Created by st on 2017/8/31.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './CompanyBrief.css';
import DivHeader from '../Util/DivHeader';

import CompanyPieChart from '../Chart/CompanyPieChart';

class CompanyBrief extends Component {
  render() {
    const {productStrategy, assetAllocation} = this.props;
    console.log(productStrategy);
    return (
      <div className={"container " + styles.brief}>
        <div className={styles.title}>
          <h1>华夏基金</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.section_a}>
            <DivHeader>公司旗下基金表现</DivHeader>
          </div>
          <div className={styles.section_b}>
            <DivHeader>公司旗下基金经理表现</DivHeader>
          </div>
          <div className={styles.section_a}>
            <DivHeader>产品策略分布</DivHeader>
            {productStrategy ?
              <CompanyPieChart chartData={productStrategy}/> : null}
          </div>
          <div className={styles.section_b}>
            <DivHeader>资产配置行业占比</DivHeader>
            {assetAllocation ?
              <CompanyPieChart chartData={assetAllocation}/> : null}
          </div>
          <div className={styles.section_c}>
            <DivHeader>风格归因</DivHeader>
          </div>
          <div className={styles.section_c}>
            <DivHeader>行业归因</DivHeader>
          </div>
        </div>
      </div>
    )
  }
}

CompanyBrief.propTypes = {};

function mapStateToProps(state) {
  return {
    productStrategy: state.fundCompany.productStrategy,
    assetAllocation: state.fundCompany.assetAllocation,
  };
}

export default connect(mapStateToProps)(CompanyBrief);
