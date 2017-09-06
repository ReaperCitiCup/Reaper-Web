/**
 * Created by st on 2017/8/23.
 */
import React from 'react';
import {connect} from 'dva';

import {Menu, message} from 'antd';
import {Link} from 'dva/router';

import styles from './Navigator.css';
import logo from '../../assets/icon.png';


function Navigator({dispatch, user}) {

  function handleSignOut() {
    dispatch({
      type: 'user/signOut',
      onSuccess: (username) => message.success('Goodbye!'),
      onError: (error) => message.error(error)
    });
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.logoDiv}>
        <div className={styles.imgDiv}>
          <img src={logo} alt={"logo"} className={styles.iconImage}></img>
        </div>
        <div className={styles.labelDiv}>
          <label className={styles.logoLabel}>FOF-Navigator</label>
        </div>
      </div>
      <Menu
        // onClick={this.handleClick}
        // selectedKeys={[this.state.current]}
        mode="horizontal"
        className={styles.menuDiv}
      >
        <Menu.Item key="/">
          <Link to="/">首页</Link>
        </Menu.Item>

        <Menu.Item key="/funds">
          <Link to="/funds">基金浏览</Link>
        </Menu.Item>

        <Menu.Item key="/asset">
          <Link to="/asset">资产配置</Link>
        </Menu.Item>

        <Menu.Item key="/combination">
          <Link to="/combination">我的组合</Link>
        </Menu.Item>

        { user ?
          <Menu.Item key="/account">
            <Link to="/account">个人中心</Link>
          </Menu.Item>
          : null
        }

        { user ?
          <Menu.Item key="/signout">
            <a onClick={handleSignOut}>注销</a>
          </Menu.Item>
          :

          <Menu.Item key="/auth">
            <Link to="/auth">登录 | 注册</Link>
          </Menu.Item>
        }

      </Menu>
      {/*<div className={styles.clearDiv}></div>*/}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}


export default connect(mapStateToProps)(Navigator);
