import React from 'react';
import {connect} from 'dva';

import AuthForm from '../components/Auth/AuthForm'
import MainLayout from "../components/Layout/MainLayout";
import Breadcrumb from '../components/Layout/Breadcrumb';

import styles from './AuthPage.css';

function AuthPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <AuthForm className={styles.form}/>
      </MainLayout>
    </div>

  );
}

AuthPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(AuthPage);
