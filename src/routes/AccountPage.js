import React from 'react';
import {connect} from 'dva';
import styles from './AccountPage.css';
import AccountInfo from '../components/AccountInfo'
import MainLayout from "../components/MainLayout";

function IndexPage() {
  return (
    <div className={styles.baseBody}>
      <MainLayout>
        <AccountInfo/>
      </MainLayout>
    </div>

  );
}

IndexPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(IndexPage);
