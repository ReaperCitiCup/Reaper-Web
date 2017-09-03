/**
 * Created by st on 2017/8/25.
 */
import React from 'react';
import {connect} from 'dva';
import styles from "./FundManagerPage.css";
import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";
import FundHeader from "../components/FundInfo/FundHeader";
import FundManagerNav from "../components/FundManager/FundManagerNav";
import FundManagerInfo from "../components/FundManager/FundManagerInfo";


function FundManagerPage({fund}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
        <FundHeader fund={fund}/>
        <FundManagerNav/>

        <div className={styles.infoDiv}>
          <FundManagerInfo/>
        </div>
      </MainLayout>
    </div>
  )
}

FundManagerPage.propTypes = {};

function mapStateToProps(state) {
  return {
    fund: state.fund.fund
  };
}

export default connect(mapStateToProps)(FundManagerPage);
