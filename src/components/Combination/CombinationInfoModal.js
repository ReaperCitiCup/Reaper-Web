import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Button, Modal} from 'antd';

import styles from './CombinationInfoModal.css';

class CombinationInfoModal extends Component {

  // state = {
  //   // visible: false,
  //   combinationName: "",
  // }


  // showModal = (name) => {
  //   this.setState({
  //     visible: true,
  //     combinationName: name
  //   });
  // }
  handleOk = (e) => {
    console.log(e);
    const {dispatch} = this.props;
    dispatch({
      type: 'combination/saveShowModalInfo',
      payload: {
        showModal: false,
        currentId: null,
        currentName: null
      }
    })
  }
  handleCancel = (e) => {
    console.log(e);
    const {dispatch} = this.props;
    dispatch({
      type: 'combination/saveShowModalInfo',
      payload: {
        showModal: false,
        currentId: null,
        currentName: null
      }
    })
  }

  render() {
    const {dispatch, showModal, name} = this.props;

    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Open</Button>*/}
        <Modal
          title={showModal.currentName}
          visible={showModal.showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>{showModal.currentName}</p>
        </Modal>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    showModal: state.combination.showModal,
  };
}

export default connect(mapStateToProps)(CombinationInfoModal);
