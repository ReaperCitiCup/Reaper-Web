import React from 'react';
import {connect} from 'dva';
import styles from './AccountPage.css';
import AccountInfo from '../components/Auth/AccountInfo'
import MainLayout from "../components/Layout/MainLayout";
import Breadcrumb from '../components/Layout/Breadcrumb';

function IndexPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <Breadcrumb items={[1, 2, 3]}/>
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
