import React from 'react';
import {connect} from 'dva';
// import styles from './AccountPage.css';
import MainLayout from "../components/Layout/MainLayout";
import FundListTable from '../components/FundList/FundListTable';
import FundListHeader from '../components/FundList/FundListHeader';

function FundListPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundListHeader/>
        <FundListTable/>
      </MainLayout>
    </div>

  );
}

FundListPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(FundListPage);
