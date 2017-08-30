/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {Input} from 'antd';
import styles from './FundSearchInput.css';

const Search = Input.Search;

class FundSearchInput extends Component {
  render() {
    return (
      <div className={styles.searchDiv}>
        <Search
          placeholder="搜索基金名称、代码..."
          style={{width: 350}}
          onSearch={value => console.log(value)}
          className={styles.searchInput}
        />
      </div>
    )
  }

}

export default FundSearchInput;
