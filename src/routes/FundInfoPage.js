import React from 'react';
import {connect} from 'dva';
// import styles from './AccountPage.css';
import MainLayout from "../components/Layout/MainLayout";
import FundBrief from "../components/FundInfo/FundBrief";

function FundInfoPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundBrief/>
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
