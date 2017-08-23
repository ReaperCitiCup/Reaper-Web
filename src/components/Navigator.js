/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './Navigator.css';
import logo from './icon.png';

class Navigator extends Component {
  render() {
    return(
      <div className={styles.navBar}>
        <div className={styles.loginDiv}>
          <button id={styles.loginButton}>登录／注册</button>
        </div>
        <div className={styles.navDiv}>
          <div className={styles.leftDiv}>
            <div className={styles.imgDiv}>
              <img src={logo} alt={"logo"} className={styles.iconImage}></img>
            </div>
            <div className={styles.labelDiv}>
              <label className={styles.logoLabel}>FOF-Navigator</label>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <button className={styles.navButton}>首页</button>
            <button className={styles.navButton}>行情概览</button>
            <button className={styles.navButton}>基金浏览</button>
            <button className={styles.navButton}>资产配置</button>
            <button className={styles.navButton}>我的组合</button>
            <button className={styles.navButton}>个人中心</button>
          </div>
        </div>
      </div>
    )
  }
}

Navigator.propTypes = {};
export default Navigator;
