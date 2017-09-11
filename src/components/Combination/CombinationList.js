/**
 * Created by st on 2017/9/5.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Table} from 'antd';

import CombinationBacktestModal from'../Combination/CombinationBacktestModal';

import styles from "./CombinationList.css";

class CombinationList extends Component {

  onModalOk = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'backTestModal/saveShowAndId',
      payload: {
        show: false,
        id: null
      }
    })
  };

  onModalCancel = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'backTestModal/saveShowAndId',
      payload: {
        show: false,
        id: null
      }
    })
  };

  render() {
    const {dispatch, data, showModal} = this.props;


    const columns = [{
      title: '组合名称',
      dataIndex: 'name',
    }, {
      title: '最新收益',
      dataIndex: 'newProfit',
    }, {
      title: '年化收益',
      dataIndex: 'annualProfit',
    }, {
      title: '相关系数',
      dataIndex: 'correlationCoefficient',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {

        // console.log(items, record.code, addable)
        return (
          <div className={styles.operation}>

            <button
            onClick={() => {
              dispatch({

              })
            }}>删除</button>

            <button
              onClick={() => {
                console.log(record.id)
                dispatch({
                  type: 'backTestModal/saveShowAndId',
                  payload: {
                    show: true,
                    id: record.id
                  }
                })
              }}
            >
              回测
            </button>
          </div>
        );
      }
    }];

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
        <CombinationBacktestModal
          visible={showModal}
          onOk={this.onModalOk}
          onCancel={this.onModalCancel}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.combination.combinations,
    showModal: state.backTestModal.show,
  };
}

export default connect(mapStateToProps)(CombinationList);
