import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import FundHeader from "../components/Util/FundHeader";
import FundBrief from "../components/FundInfo/FundBrief";
import FundCharts from "../components/FundInfo/FundCharts";

import styles from './FundInfoPage.css';

function FundInfoPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundHeader/>
        <div className={styles.fund_brief}>
          <FundBrief/>
        </div>
        <FundCharts/>
      </MainLayout>
    </div>

  );
}

FundInfoPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(FundInfoPage);
