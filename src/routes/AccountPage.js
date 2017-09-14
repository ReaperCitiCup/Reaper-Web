import React from 'react';
import {connect} from 'dva';

import AccountInfo from '../components/Auth/AccountInfo'
import MainLayout from "../components/Layout/MainLayout";
import Breadcrumb from '../components/Layout/Breadcrumb';

import styles from './AccountPage.css';

function IndexPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <div className="container">
          {/*<Breadcrumb items={[1, 2, 3]}/>*/}
        </div>
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
