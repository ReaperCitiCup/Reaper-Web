/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Input} from 'antd';
import styles from './FundSearchInput.css';

const Search = Input.Search;

function FundSearchInput({dispatch}) {

  function onChange(event) {
    const keyword = event.target.value;
    dispatch({
      type: 'search/saveKeyword',
      payload: keyword,
    })
  }

  function onSearch() {
    dispatch({
      type: 'search/fetchFundsByKeyword'
    })
  }

  return (
    <div className={styles.searchDiv}>
      <Search
        placeholder="搜索基金名称、代码..."
        style={{width: 350}}
        onChange={onChange}
        onSearch={onSearch}
        className={styles.searchInput}
      />
    </div>
  )

}

export default connect()(FundSearchInput);
