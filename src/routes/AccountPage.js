import React from 'react';
import {connect} from 'dva';
import styles from './AccountPage.css';
import AccountInfo from '../components/Auth/AccountInfo'
import MainLayout from "../components/Layout/MainLayout";

function IndexPage() {
  return (
    <div className="baseBody">
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
