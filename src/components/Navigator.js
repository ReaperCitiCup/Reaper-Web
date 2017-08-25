/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './Navigator.css';
import logo from '../assets/icon.png';

import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Navigator extends Component {
  render() {
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
          <Menu.Item key="app">
            <Link to="/">行情概览</Link>
          </Menu.Item>
          <Menu.Item key="fund">
            <Link to="/">基金浏览</Link>
          </Menu.Item>
          <Menu.Item key="/account">
            <Link to="/account">个人中心</Link>
          </Menu.Item>
        </Menu>
        {/*<div className={styles.clearDiv}></div>*/}
      </div>
    )
  }
}

Navigator.propTypes = {};
export default Navigator;

{/*<div className={styles.navBar}>*/
}
{/*<div className={styles.loginDiv}>*/
}
{/*<button id={styles.loginButton}>登录／注册</button>*/
}
{/*</div>*/
}
{/*<div className={styles.navDiv}>*/
}
{/*<div className={styles.leftDiv}>*/
}
{/*<div className={styles.imgDiv}>*/
}
{/*<img src={logo} alt={"logo"} className={styles.iconImage}></img>*/
}
{/*</div>*/
}
{/*<div className={styles.labelDiv}>*/
}
{/*<label className={styles.logoLabel}>FOF-Navigator</label>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*<div className={styles.rightDiv}>*/
}
{/*<button className={styles.navButton}>首页</button>*/
}
{/*<button className={styles.navButton}>行情概览</button>*/
}
{/*<button className={styles.navButton}>基金浏览</button>*/
}
{/*<button className={styles.navButton}>资产配置</button>*/
}
{/*<button className={styles.navButton}>我的组合</button>*/
}
{/*<button className={styles.navButton}>个人中心</button>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}
