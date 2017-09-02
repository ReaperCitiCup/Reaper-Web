/**
 * Created by st on 2017/8/31.
 */
import React from 'react';
import {connect} from 'dva';
import styles from "./FundManagerPage.css";
import MainLayout from "../components/Layout/MainLayout";
import FundHeader from "../components/Util/FundHeader";
import CompanyBrief from "../components/FundCompany/CompanyBrief";

function FundCompanyPage() {
  return (
    <div className="baseBody">
      <MainLayout>
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
