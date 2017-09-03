import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import FundAnalysisMenu from "../components/FundAnalysis/FundAnalysisMenu";
import FundAnalysisCharts from "../components/FundAnalysis/FundAnalysisCharts";

import styles from './FundAnalysisPage.css';

function FundAnalysisPage({fund}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader fund={fund}/>
        <div className="container">
          <div className={styles.fund_analysis}>
            <div className={styles.left_wrapper}>
              <FundAnalysisMenu/>
            </div>
            <div className={styles.right_wrapper}>
              <FundAnalysisCharts/>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>

  );
}

FundAnalysisPage.propTypes = {};

function mapStateToProps(state) {
  return {
    fund: state.fund.fund
  };
}

export default connect(mapStateToProps)(FundAnalysisPage);
