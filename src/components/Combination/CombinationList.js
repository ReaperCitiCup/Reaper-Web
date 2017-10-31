/**
 * Created by st on 2017/9/5.
 */
import React, {Component} from 'react';
import {message} from 'antd';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Table} from 'antd';
import CombinationBacktestModal from '../Combination/CombinationBacktestModal';
import CombinationInfoModal from '../Combination/CombinationInfoModal';
import styles from "./CombinationList.css";

class CombinationList extends Component {

  onModalOk = () => {
    const {dispatch} = this.props;

    dispatch({
      type: 'combination/backtestCombination',
      // payload:
    });

    dispatch({
      type: 'backTestModal/saveShowAndId',
      payload: {
        show: false,
        id: null
      }
    });

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

  onClickCombination = (record) => {
    console.log(record)
    const {dispatch} = this.props;
    dispatch({
      type: 'combination/saveShowModalInfo',
      payload: {
        showModal: true,
        currentInfo: record,
      }
    })
  };


  // onClickRow = (record, index, event) => {
  //   const {dispatch} = this.props;
  //   dispatch(routerRedux.push(`/combination/${record.id}`))
  // };

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
      title: '年化波动率',
      dataIndex: 'volatility',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {

        // console.log(items, record.code, addable)
        return (
          <div className={styles.operation}>

            <button
              onClick={(event) => {
                event.stopPropagation();
                dispatch({
                  type: 'combination/deleteCombination',
                  payload: record.id,

                  onSuccess: (m) => message.success('删除成功！'),
                  onError: (m) => message.error(m)
                })
              }}>删除
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
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
                 onRowClick={this.onClickCombination}
          />
        </div>
        <CombinationBacktestModal
          visible={showModal}
          onOk={this.onModalOk}
          onCancel={this.onModalCancel}
        />
        <CombinationInfoModal/>
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
