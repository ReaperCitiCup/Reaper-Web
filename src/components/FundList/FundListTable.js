/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import styles from './FundListTable.css';
import {Table, Button} from 'antd';

const columns = [{
  title: '基金代码',
  dataIndex: 'fundID',
}, {
  title: '基金名称',
  dataIndex: 'fundName',
}, {
  title: '基金经理',
  dataIndex: 'fundManager',
}, {
  title: '年化收益',
  dataIndex: 'annualProfit',
}, {
  title: '波动率',
  dataIndex: 'volatility',
}];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    fundID: `1111 ${i}`,
    fundName: `基金${i}`,
    fundManager: `London, Park Lane no. ${i}`,
    annualProfit: `0.03`,
    volatility: `111`
  });
}

class FundListTable extends Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({loading: true});
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  render() {
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="container">
        <div style={{marginBottom: 16}}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            清空
          </Button>
          <span style={{marginLeft: 8}}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <div className={styles.tableDiv}>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                 pagination={false}/>
        </div>
      </div>
    );
  }
}

FundListTable.propTypes = {};

export default FundListTable;
