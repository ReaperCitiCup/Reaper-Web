import React from 'react';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import NetValueLineChart from "../Chart/NetValueLineChart";

function FundCharts() {
  return (
    <div className="container">
      <div className="card">
        <Tabs defaultActiveKey="1">
          <TabPane tab="单位净值走势" key="1">
            <NetValueLineChart/>
          </TabPane>
          <TabPane tab="累计净值走势" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default FundCharts;
