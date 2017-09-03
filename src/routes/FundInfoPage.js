import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import FundBrief from "../components/FundInfo/FundBrief";
import FundCharts from "../components/FundInfo/FundCharts";


function FundInfoPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader/>
        <FundBrief/>
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
