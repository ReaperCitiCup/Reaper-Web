import React from 'react';
import {connect} from 'dva';
// import styles from './AccountPage.css';
import MainLayout from "../components/Layout/MainLayout";
import FundListTable from '../components/FundList/FundListTable';
import FundListHeader from '../components/FundList/FundListHeader';

function FundListPage({result}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundListHeader/>
        <FundListTable data={result}/>
      </MainLayout>
    </div>

  );
}

FundListPage.propTypes = {};

function mapStateToProps(state) {
  return {
    result: state.search.result
  };
}

export default connect(mapStateToProps)(FundListPage);
