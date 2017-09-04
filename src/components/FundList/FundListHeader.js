/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Select} from 'antd';

import FundSearchInput from './FundSearchInput';

import styles from './FundListHeader.css';

function FundListHeader({dispatch}) {

  function handleOrderChange(value) {
    dispatch({
      type: 'search/changeOrder',
      payload: value
    })
  }

  return (
    <div className="container">
      <div className={styles.headerDiv}>
        <div className={styles.leftDiv}>
          <span className={styles.listHeader}>基金数据库</span>
          <span className={styles.listNumSpan}>
            共计
            <span className={styles.listNum}>
              111,111
            </span>
            只
          </span>
          <span className={styles.listSortSpan}>
            排序：
          </span>

          <Select defaultValue="code"
                  className={styles.select}
            // style={{width: 120}}
                  onChange={handleOrderChange}>
            <Option value="code">基金代码</Option>
            <Option value="name">基金名称</Option>
          </Select>

        </div>
        <FundSearchInput/>
      </div>

    </div>
  )

}

FundListHeader.propTypes = {};

export default connect()(FundListHeader);
