/**
 * Created by st on 2017/9/5.
 */
import React, {Component} from 'react';
import styles from "./CombinationList.css";
import {Table} from 'antd';

const columns = [{
  title: '序号',
  dataIndex: 'combId',
}, {
  title: '组合名称',
  dataIndex: 'combName',
}, {
  title: '累计收益',
  dataIndex: 'accumulatedProfit',
}, {
  title: '年化收益',
  dataIndex: 'annualProfit',
}, {
  title: '最大回撤',
  dataIndex: 'maxRetracement',
}, {
  title: '删除',
  dataIndex: 'delete',
}];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    combId: i,
    combName: `我的组合 ${i}`,
    accumulatedProfit: 100,
    annualProfit: 100,
    maxRetracement: 100,
    delete: 100
  });
}

class CombinationList extends Component {

  render() {
    return (
      <div className="container">
        <div>
          <h1 className={styles.title}>我的组合</h1>
        </div>

        <div className={styles.list_div}>
          <Table columns={columns} dataSource={data} size="middle" pagination={false}/>
        </div>

      </div>
    )
  }
}

export default CombinationList;
