import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import FundBrief from "../components/FundInfo/FundBrief";
import FundCharts from "../components/FundInfo/FundCharts";


function FundInfoPage({fund}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader fund={fund}/>
        <FundBrief fund={fund}/>
        <FundCharts/>
      </MainLayout>
    </div>

  );
}

FundInfoPage.propTypes = {};

function mapStateToProps(state) {
  return {
    fund: state.fund.fund
  };
}

export default connect(mapStateToProps)(FundInfoPage);
