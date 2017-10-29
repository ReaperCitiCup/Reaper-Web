/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

import {Table, Button, Pagination} from 'antd';

import plus from '../../assets/plus.png';

import styles from './FundListTable.css';

class FundListTable extends Component {

  onClickRow = (record, index, event) => {
    // console.log(record);
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
    const columns = [{
      title: '基金代码',
      dataIndex: 'code',
    }, {
      title: '基金名称',
      dataIndex: 'name',
      // render: text => <button onClick={this.onClickRow}>{text}</button>
    }, {
      title: '基金经理',
      dataIndex: 'manager',
    }, {
      title: '年化收益',
      dataIndex: 'annualProfit',
    }, {
      title: '波动率',
      dataIndex: 'volatility',
    }, {
      title: '添加至组合',
      dataIndex: 'add',
      render: (text, record, index) => {

        const {items, dispatch} = this.props;
        const addable = items.filter(item => item.code === record.code).length === 0;

        // console.log(items, record.code, addable)
        return (
          <div>
            {
              addable ?
                <div className={styles.operation} onClick={(event) => {
                  event.stopPropagation();
                  dispatch({
                    type: 'createCombination/saveShow',
                    payload: true
                  });
                  dispatch({
                    type: 'createCombination/addItem',
                    payload: {
                      code: record.code,
                      name: record.name
                    }
                  });
                }}>
                <span>
                  <img src={plus}
                       width={14}
                  />
            </span>
                </div> : null
            }
          </div>

        );
      }
    }];
    return (
      <div className="container">

        <div className={styles.tableDiv}>
          <Table
            className={styles.fundListTable}
            // rowSelection={rowSelection}
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
    page: state.search.page,
    items: state.createCombination.items,
  };
}

export default connect(mapStateToProps)(FundListTable);
