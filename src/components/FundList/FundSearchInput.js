/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

import {Input} from 'antd';
import styles from './FundSearchInput.css';

const Search = Input.Search;

function FundSearchInput({dispatch, keyword}) {

  function onChange(event) {
    const keyword = event.target.value;
    dispatch({
      type: 'search/saveKeyword',
      payload: keyword,
    })
  }

  function onSearch() {
    dispatch(routerRedux.push(`/funds`))
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
        value={keyword}
        className={styles.searchInput}
      />
    </div>
  )

}

function mapStateToProps(state) {
  return {
    keyword: state.search.keyword,
  };
}

export default connect(mapStateToProps)(FundSearchInput);
