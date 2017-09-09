import React from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';

import styles from './FundHeader.css';

function FundHeader({fundBrief}) {

  return (
    <div className="container ">
      <div className={styles.header}>

        <div className={styles.title}>
          <h1>{fundBrief ? fundBrief.name : null}</h1>
          <h2>{fundBrief ? fundBrief.code : null}</h2>
        </div>

        {fundBrief ?
          <div className={styles.button_wrapper}>
            <Link to={`/fund/${fundBrief.code}`}>基金详情</Link>
            <Link to={`/fund/${fundBrief.code}/manager`}>基金经理</Link>
            <Link to={`/fund/${fundBrief.code}/company`}>基金公司</Link>
            <Link to={`/fund/${fundBrief.code}/analysis`}>深度分析</Link>
          </div>
          : null}
      </div>
    </div>
  )

}

FundHeader.propTypes = {};

function mapStateToProps(state) {
  return {
    fundBrief: state.fund.fundBrief,
  };
}

export default connect(mapStateToProps)(FundHeader);
