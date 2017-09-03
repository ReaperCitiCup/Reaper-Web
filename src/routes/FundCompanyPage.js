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

function FundCompanyPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader/>
        <CompanyBrief/>
      </MainLayout>
    </div>
  )
}

FundCompanyPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(FundCompanyPage);
