/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import styles from './FundListHeader.css';
import {Menu, Select, Icon} from 'antd';
import FundSearchInput from './FundSearchInput';

const select = (
  <div>

  </div>
)
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

  handleOrderChange = () => {

  };

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

            <Select defaultValue="code"
                    className={styles.select}
                    // style={{width: 120}}
                    onChange={this.handleOrderChange}>
              <Option value="code">基金代码</Option>
              <Option value="name">基金名称</Option>
            </Select>

          </div>
          <FundSearchInput/>
        </div>

      </div>
    )
  }
}

FundListHeader.propTypes = {};
export default FundListHeader;
