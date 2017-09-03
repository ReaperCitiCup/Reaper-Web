/**
 * Created by st on 2017/8/31.
 */
import React from 'react';
import {connect} from 'dva';
import styles from "./FundManagerPage.css";
import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import CompanyBrief from "../components/FundCompany/CompanyBrief";

function FundCompanyPage({fund}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader fund={fund}/>
        <CompanyBrief/>
      </MainLayout>
    </div>
  )
}

FundCompanyPage.propTypes = {};

function mapStateToProps(state) {
  return {
    fund: state.fund.fund
  };
}

export default connect(mapStateToProps)(FundCompanyPage);
