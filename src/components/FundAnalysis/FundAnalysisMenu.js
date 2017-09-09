import React, {Component} from 'react';
import {Menu, Icon} from 'antd';

import styles from './FundAnalysisMenu.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class FundAnalysisMenu extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        className={styles.menu}
        // style={{width: 240}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title="总体表现">
          <Menu.Item key="1"><a href="#1">收益 | 风险走势</a></Menu.Item>
          <Menu.Item key="2"><a href="#2">风险概览</a></Menu.Item>
          <Menu.Item key="3"><a href="#3">评价指标</a></Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" title="绩效归因">
          <MenuItemGroup key="g1" title="股票投资绩效归因">
            <Menu.Item key="6"><a href="#6">风格归因</a></Menu.Item>
            <Menu.Item key="7"><a href="#7">行业归因</a></Menu.Item>
            <Menu.Item key="8"><a href="#8">风格稳定性</a></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="债券投资绩效归因">
            <Menu.Item key="9"><a href="#9">Brison 归因</a></Menu.Item>
            <Menu.Item key="10"><a href="#10">利率曲线归因</a></Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <SubMenu key="sub4" title="投研团队能力">
          <Menu.Item key="11"><a href="#11">择时 | 择股能力</a></Menu.Item>
          <Menu.Item key="12"><a href="#12">基金经理表现</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default FundAnalysisMenu;
