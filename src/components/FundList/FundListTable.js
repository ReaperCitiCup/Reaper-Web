/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

import {Table, Button, Pagination} from 'antd';

import styles from './FundListTable.css';

const columns = [{
  title: '基金代码',
  dataIndex: 'code',
}, {
  title: '基金名称',
  dataIndex: 'name',
}, {
  title: '基金经理',
  dataIndex: 'manager',
}, {
  title: '年化收益',
  dataIndex: 'annualProfit',
}, {
  title: '波动率',
  dataIndex: 'volatility',
}];

// const data = [];
// for (let i = 0; i < 10; i++) {
//   data.push({
//     key: i,
//     code: `1111 ${i}`,
//     name: `基金${i}`,
//     manager: `London, Park Lane no. ${i}`,
//     annualProfit: `0.03`,
//     volatility: `111`
//   });
// }

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

  onClickRow = (record, index, event) => {
    const {dispatch} = this.props;
    dispatch(routerRedux.push(`/fund/${record.code}`))
  };

  onPageChange = (page) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'search/changePage',
      payload: page
    })
  };

  render() {
    const {data, page, totalCount} = this.props;

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
          <Table rowSelection={rowSelection}
                 columns={columns}
                 dataSource={data}
                 pagination={false}
                 onRowClick={this.onClickRow}
          />
        </div>
        <Pagination className={styles.pagination}
                    defaultCurrent={1}
                    current={page}
                    total={totalCount}
                    onChange={this.onPageChange}
        />
      </div>
    );
  }
}

FundListTable.propTypes = {};

function mapStateToProps(state) {
  return {
    data: state.search.result,
    totalCount: state.search.totalCount,
    page: state.search.page
  };
}

export default connect(mapStateToProps)(FundListTable);
