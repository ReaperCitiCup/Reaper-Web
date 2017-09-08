import React from 'react';
import {connect} from 'dva';

import MainLayout from "../components/Layout/MainLayout";
import FundListTable from '../components/FundList/FundListTable';
import FundListHeader from '../components/FundList/FundListHeader';

import CombinationModal from '../components/CombinationModal/CombinationModal';

import styles from './FundListPage.css';

function FundListPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundListHeader/>
        <FundListTable/>
      </MainLayout>
      <CombinationModal className={styles.combination_modal}/>
    </div>

  );
}

FundListPage.propTypes = {};

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(FundListPage);
