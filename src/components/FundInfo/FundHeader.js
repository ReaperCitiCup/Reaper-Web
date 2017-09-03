import React from 'react';
import {Link} from 'dva/router';

import styles from './FundHeader.css';

function FundHeader({fund}) {

  return (
    <div className="container ">
      <div className={styles.header}>

        <div className={styles.title}>
          <h1>{fund ? fund.name : null}</h1>
          <h2>{fund ? fund.code : null}</h2>
        </div>

        {fund ?
          <div className={styles.button_wrapper}>
            <Link to={`/fund/${fund.code}`}>基金详情</Link>
            <Link to={`/fund/${fund.code}/manager`}>基金经理</Link>
            <Link to={`/fund/${fund.code}/company`}>基金公司</Link>
            <Link to={`/fund/${fund.code}/analysis`}>深度分析</Link>
          </div>
          : null}
      </div>
    </div>
  )

}


export default FundHeader;
