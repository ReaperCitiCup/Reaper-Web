/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import styles from './FundListHeader.css';
import {Menu, Dropdown, Icon} from 'antd';
import {Input} from 'antd';

const Search = Input.Search;

const menu = (
  <Menu>
    <Menu.Item>
      <span href="/">基金代码</span>
    </Menu.Item>
    <Menu.Item>
      <span>基金名称</span>
    </Menu.Item>
    <Menu.Item>
      <span>基金经理</span>
    </Menu.Item>
  </Menu>
);

class FundListHeader extends Component {
  render() {
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
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                基金代码 <Icon type="down"/>
              </a>
            </Dropdown>
          </div>
          <div className={styles.searchDiv}>
            <Search
              placeholder="搜索基金名称、代码..."
              style={{width: 350}}
              onSearch={value => console.log(value)}
              className={styles.searchInput}
            />
          </div>
        </div>

      </div>
    )
  }
}

FundListHeader.propTypes = {};
export default FundListHeader;
