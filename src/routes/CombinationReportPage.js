/**
 * Created by st on 2017/9/6.
 */
import React from 'react';
import {connect} from 'dva';
import MainLayout from "../components/Layout/MainLayout";
import CombinationReport from "../components/Combination/CombinationReport";

function CombinationReportPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <CombinationReport/>
      </MainLayout>
    </div>
  )
}

CombinationReportPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(CombinationReportPage);
