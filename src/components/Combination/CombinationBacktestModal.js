/**
 * Created by Sorumi on 17/9/10.
 */
import React from 'react';
import {connect} from 'dva';
import {Modal, DatePicker, Select} from 'antd';
import moment from 'moment';

import styles from "./CombinationBacktestModal.css";

const RangePicker = DatePicker.RangePicker;
const dateFormat = 'YYYY-MM-DD';

function CombinationBacktestModal({dispatch, visible, onOk, onCancel, startDate, endDate, baseIndex}) {

  function handleDateChange(date, dateString) {
    dispatch({
      'type': 'backTestModal/saveDate',
      payload: {
        startDate: dateString[0],
        endDate: dateString[1]
      }
    })
  }

  function handleSelectChange(value) {
    dispatch({
      'type': 'backTestModal/saveBaseIndex',
      payload: value
    })
  }

  function disabledDate(current) {

    return current && current.valueOf() > Date.now();
  }

  // const today = new Date().toISOString().substring(0, 10);
  return (
    <Modal
      title="回测"
      className={styles.modal}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >

      <div className={styles.cell}>
        <span>回测日期</span>
        <div>
          <RangePicker
            className={styles.range_picker}
            disabledDate={disabledDate}
            value={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
            onChange={handleDateChange}
            allowClear={false}
          />
        </div>
      </div>

      <div className={styles.cell}>
        <span>基准指标</span>
        <div>
          <Select
            className={styles.select}
            // defaultValue="szzz"
            value={baseIndex}
            onChange={handleSelectChange}>
            <Select.Option value="szzs">上证指数</Select.Option>
            <Select.Option value="gzzs">国债指数</Select.Option>
            <Select.Option value="sz180">上证 180</Select.Option>
            <Select.Option value="sz50">上证 50</Select.Option>
            <Select.Option value="zz500">中证 500</Select.Option>
          </Select>
        </div>
      </div>

    </Modal>
  )
}

function mapStateToProps(state) {
  return {
    startDate: state.backTestModal.startDate,
    endDate: state.backTestModal.endDate,
    baseIndex: state.backTestModal.baseIndex,
  };
}

export default connect(mapStateToProps)(CombinationBacktestModal);
