/**
 * Created by st on 2017/9/5.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Table} from 'antd';

import styles from "./CombinationList.css";

const columns = [{
  title: '组合名称',
  dataIndex: 'name',
}, {
  title: '累计收益',
  dataIndex: 'cumulativeProfit',
}, {
  title: '年化收益',
  dataIndex: 'annualProfit',
}, {
  title: '最大回撤',
  dataIndex: 'maxRetracement',
}, {
  title: '操作',
  dataIndex: 'operation',
  render: (text, record, index) => {

    // console.log(items, record.code, addable)
    return (
      <div className={styles.operation}>

        <button>删除</button>

        <button>回测</button>
      </div>
    );
  }
}];

class CombinationList extends Component {

  render() {
    const {data} = this.props;
    return (
      <div className="container">
        <div>
          <h1 className={styles.title}>我的组合</h1>
        </div>

        <div className={styles.list_div}>
          <Table columns={columns}
                 dataSource={data}
                 size="middle"
                 pagination={false}
          />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.combination.combinations,
  };
}

export default connect(mapStateToProps)(CombinationList);
