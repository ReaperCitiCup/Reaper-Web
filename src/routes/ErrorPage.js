/**
 * Created by st on 2017/9/11.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="baseBody">
      <p className={styles.error_message}>出错啦</p>
    </div>
  )
}

ErrorPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(ErrorPage);

