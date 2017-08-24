import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import AccountInfo from '../components/AccountInfo'

function IndexPage() {
  return (
    <div className={styles.baseBody}>
      <AccountInfo/>
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
