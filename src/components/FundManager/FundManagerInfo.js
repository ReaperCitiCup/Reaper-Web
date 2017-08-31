/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import styles from './FundManagerInfo.css';
import DivHeader from '../Util/DivHeader';
import {Table, Button} from 'antd';
import {Tabs} from 'antd';

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

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    fundID: `1111 ${i}`,
    fundName: `基金${i}`,
    fundType: `London, Park Lane no. ${i}`,
    scale: `0.03`,
    workDate: `111`,
    workTime: `111`,
    workReturn: `111`
  });
}

class FundManagerInfo extends Component {

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
        <div className={styles.totalInfoDiv}>
          <div className={styles.managerNameDiv}>
            <div className={styles.managerPhoto}>

            </div>
            <div className={styles.managerInfo}>
              <p className={styles.managerName}>董阳阳</p>
              <p className={styles.managerOtherInfo}>累积任职时间：
                <span className={styles.workingTime}>4年又149天</span>
              </p>
              <p className={styles.managerOtherInfo}>任职起始时间：
                <span className={styles.workStartDate}>2013-03-11</span>
              </p>
              <p className={styles.managerOtherInfo}>现任基金公司：
                <span className={styles.companyName}>华夏基金管理有限公司</span>
              </p>
            </div>
          </div>

          <div className={styles.fundScaleDiv}>
            <p className={styles.divTitle}>现任基金资产总规模</p>
            <span className={styles.fundNumber}>56.50</span>
            <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;亿元</span>
          </div>
          <div className={styles.fundReturnDiv}>
            <p className={styles.divTitle}>任职期间最佳基金回报</p>
            <span className={styles.fundNumber}>65.83</span>
            <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;%</span>
          </div>
        </div>

        <div className={styles.introductionDiv}>
          <div className={styles.infoChartDiv}>

          </div>
          <div className={styles.managerIntroDiv}>
            <DivHeader value={'基金经理简介'}/>
            <p className={styles.managerIntro}>
              董阳阳先生,美国波士顿学院金融学硕士、工商管理学硕士。曾任中国国际金融有限公司投行业务部经理。2009年8月加入华夏基金管理有限公司,曾任研究员、基金经理助理、投资经理等,现任股票投资部总监,华夏蓝筹核心混合型证券投资基金(LOF)基金经理(2013年3月11日起任职)、华夏成长证券投资基金基金经理(2015年1月7日起任职)。
            </p>
          </div>
        </div>

        <div className={styles.fundHistoryDiv}>
          <DivHeader value={'历史管理基金'}/>

          <div style={{marginBottom: 16}}>
            {/*<Button*/}
              {/*type="primary"*/}
              {/*onClick={this.start}*/}
              {/*disabled={!hasSelected}*/}
              {/*loading={loading}*/}
            {/*>*/}
              {/*清空*/}
            {/*</Button>*/}
            <span style={{marginLeft: 8}}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
          </div>
          <div className={styles.tableDiv}>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                   pagination={false}/>
          </div>

        </div>

        <div className={styles.fundPerformance}>
          <div className={styles.performanceLeft}>
              <div className="card">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="现任基金业绩" key="1">
                  </TabPane>
                  <TabPane tab="现任基金排名" key="2">
                  </TabPane>
                </Tabs>
              </div>

          </div>

          <div className={styles.performanceRight}>

          </div>
        </div>

        <div className={styles.fundYieldTrend}>
          <div className="card">
            <Tabs defaultActiveKey="1">
              <TabPane tab="现任基金收益率走势" key="1">
              </TabPane>
              <TabPane tab="现任基金排名走势" key="2">
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div className={styles.previousFundManagerDiv}>
          <DivHeader value={"历任基金经理"}/>
        </div>

        <div className={styles.managerPerformanceDiv}>
          <div className={styles.previousPerformance}>
            <DivHeader value={"当前基金经理历任基金表现"}/>
          </div>
          <div className={styles.integratedPerformance}>
            <DivHeader value={"当前基金经理综合表现"}/>
          </div>
        </div>

        <div className={styles.networkChart}>
          <DivHeader value={"基金经理社会网络关系图"}/>
        </div>

      </div>
    )
  }
}

export default FundManagerInfo;
