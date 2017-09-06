import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import FundBrief from "../components/FundInfo/FundBrief";
import FundCharts from "../components/FundInfo/FundCharts";


function FundInfoPage({fund, fundChartData}) {
  // console.log({fund});
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        {fund ?
          <div>
            <FundHeader fund={fund}/>
            <FundBrief fund={fund}/>
          </div> : null}
        {fundChartData ?
          <div>
            <FundCharts fundChart={fundChartData}/>
          </div> : null}
      </MainLayout>
    </div>

  );
}

FundInfoPage.propTypes = {};

function mapStateToProps(state) {
  return {
    fund: state.fund.fund,
    fundChartData: state.fundChart.fundChart
  };
}

export default connect(mapStateToProps)(FundInfoPage);
