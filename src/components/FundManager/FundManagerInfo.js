/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './FundManagerInfo.css';
import DivHeader from '../Util/DivHeader';
import Loading from '../Util/Loading';
import {Table, Button, Tabs, Spin} from 'antd';

import ManagerCharts from "./ManagerCharts";
import FundManagerRadarChart from "../Chart/FundManagerRadarChart";

const TabPane = Tabs.TabPane;

const columns = [{
  title: '基金代码',
  dataIndex: 'fundID',
}, {
  title: '基金名称',
  dataIndex: 'fundName',
}, {
  title: '基金类型',
  dataIndex: 'fundType',
}, {
  title: '规模（亿元）',
  dataIndex: 'scale',
}, {
  title: '任职时间',
  dataIndex: 'workDate',
}, {
  title: '任职天数',
  dataIndex: 'workTime',
}, {
  title: '任职回报',
  dataIndex: 'workReturn',
}];

// const data = [{
//   key: '1',
//   fundID: 'John Brown',
//   fundName: 32,
//   fundType: 'New York No. 1 Lake Park',
//   scale: 1,
//   workDate: 1,
//   workTime: 1,
//   workReturn: 1
// }, {
//   key: '2',
//   fundID: 'Jim Green',
//   fundName: 42,
//   fundType: 'London No. 1 Lake Park',
//   scale: 1,
//   workDate: 1,
//   workTime: 1,
//   workReturn: 1
// }, {
//   key: '3',
//   fundID: 'Joe Black',
//   fundName: 32,
//   fundType: 'Sidney No. 1 Lake Park',
//   scale: 1,
//   workDate: 1,
//   workTime: 1,
//   workReturn: 1
// }];


class FundManagerInfo extends Component {

  render() {
    const {managerInfo, managerAbility, managerFunds, dispatch} = this.props;

    let data = [];
    if (managerFunds !== null && managerFunds !== undefined) {
      for (let i = 0; i < managerFunds.length; i++) {
        data.push({
          key: i,
          fundID: managerFunds[i].id,
          fundName: managerFunds[i].name,
          fundType: managerFunds[i].type,
          scale: managerFunds[i].scope,
          workDate: managerFunds[i].startDate + " - " + managerFunds[i].endDate,
          workTime: managerFunds[i].days,
          workReturn: managerFunds[i].returns,
        })
      }
    }

    // console.log(managerInfo);
    // console.log("！！！！！！");
    return (

      <div className="container">
        {managerInfo ?
          <div className={styles.totalInfoDiv}>
            <div className={styles.managerNameDiv}>
              <div>
                <div className={styles.managerPhoto}>
                  <img src={managerInfo.managerImageUrl}/>
                </div>
                <div className={styles.managerInfo_body}>
                  <p className={styles.managerName}>{managerInfo.name}</p>
                  <p className={styles.managerOtherInfo}>累积任职时间：
                    <span className={styles.workingTime}>{managerInfo.cumulativeDays}</span>
                  </p>
                  <p className={styles.managerOtherInfo}>任职起始时间：
                    <span className={styles.workStartDate}>{managerInfo.appointedDate}</span>
                  </p>
                  <p className={styles.managerOtherInfo}>现任基金公司：
                    <span className={styles.companyName}>{managerInfo.company.name}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.fundScaleDiv}>
              <p className={styles.divTitle}>现任基金资产总规模</p>
              <div>
                <span className={styles.fundNumber}>{managerInfo.totalScope}</span>
                <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;亿元</span>
              </div>
            </div>
            <div className={styles.fundReturnDiv}>
              <p className={styles.divTitle}>任职期间最佳基金回报</p>
              <span className={styles.fundNumber}>{managerInfo.bestReturns}</span>
              <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;%</span>
            </div>
          </div> :
          <Loading/>}

        <div className={styles.introductionDiv}>

          <div className={styles.infoChartDiv}>
            {managerAbility ? <FundManagerRadarChart chartData={managerAbility}/> :
              <Loading/>}
          </div>
          <div className={styles.managerIntroDiv}>
            <DivHeader>基金经理简介</DivHeader>
            {managerInfo ?
              <p className={styles.managerIntro}>
                {managerInfo.introduction}
              </p> :
              <Loading/>}
          </div>
        </div>

        <div className={styles.fundHistoryDiv}>
          <DivHeader>历史管理基金</DivHeader>
            <div>
              <Table columns={columns} dataSource={data} size="middle" pagination={data.length > 5}/>
            </div>

        </div>

        <ManagerCharts/>


      </div>
    )
  }
}

FundManagerInfo.propTypes = {};

function mapStateToProps(state) {
  return {
    managerInfo: state.fundManager.managerInfo,
    managerAbility: state.fundManager.managerAbility,
    managerFunds: state.fundManager.managerFunds,
  };
}

export default connect(mapStateToProps)(FundManagerInfo);
