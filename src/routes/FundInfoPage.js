import React from 'react';
import {connect} from 'dva';
// import styles from './AccountPage.css';
import MainLayout from "../components/Layout/MainLayout";
import Breadcrumb from "../components/Layout/Breadcrumb";
import FundBrief from "../components/FundInfo/FundBrief";

function FundInfoPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <Breadcrumb items={[1, 2, 3]}/>
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
