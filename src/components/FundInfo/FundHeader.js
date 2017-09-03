import React from 'react';
import {Link} from 'dva/router';

import styles from './FundHeader.css';

function FundHeader() {

  return (
    <div className="container ">
      <div className={styles.header}>

        <div className={styles.title}>
          <h1>华夏成长</h1>
          <h2>000001</h2>
        </div>

        <div className={styles.button_wrapper}>
          <Link to="/fund/1">基金详情</Link>
          <Link to="/fund/1/manager">基金经理</Link>
          <Link to="/fund/1/company">基金公司</Link>
          <Link to="/fund/1/analysis">深度分析</Link>
        </div>

      </div>
    </div>
  )

}


export default FundHeader;
