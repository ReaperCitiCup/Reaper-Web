import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Button, Modal, Table} from 'antd';
import CompanyPieChart from '../Chart/CompanyPieChart'

import styles from './CombinationInfoModal.css';

const columns = [{
  title: '基金代码',
  dataIndex: 'code',
}, {
  title: '基金名称',
  dataIndex: 'name',
}, {
  title: '权重',
  dataIndex: 'weight',
}];

class CombinationInfoModal extends Component {


  handleOk = (e) => {
    // console.log(e);
    const {dispatch} = this.props;
    dispatch({
      type: 'combination/saveShowModalInfo',
      payload: {
        showModal: false,
        currentInfo: '',
      }
    })
  }
  handleCancel = (e) => {
    // console.log(e);
    const {dispatch} = this.props;
    dispatch({
      type: 'combination/saveShowModalInfo',
      payload: {
        showModal: false,
        currentInfo: '',
      }
    })
  }

  render() {
    const {dispatch, showModal, name} = this.props;

    if (showModal) {
      console.log(showModal)
    }

    const tableData = [];
    if (showModal.currentInfo) {
      showModal.currentInfo.combination.forEach(c => {
        tableData.push({
          key: c.code,
          code: c.code,
          name: c.name,
          weight: c.weight,
        })
      })
    }

    return (
             <Modal
              className={styles.combinationInfoModal}
              title={showModal ? showModal.currentInfo.name : ''}
              visible={showModal.showModal}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
               {showModal ?
              <div className={styles.ttt}>
                {/*<p>{showModal.currentName}</p>*/}
                <CompanyPieChart chartData={showModal.currentInfo.combination}/>
                <Table columns={columns} dataSource={tableData} size="middle" pagination={false}/>
              </div> : null }

            </Modal>

    )
  }
}


function mapStateToProps(state) {
  return {
    showModal: state.combination.showModal,
    currentInfo: state.combination.currentInfo,
  };
}

export default connect(mapStateToProps)(CombinationInfoModal);
