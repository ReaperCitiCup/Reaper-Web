import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import pageFoot from '../components/pageFoot';
import logo from './cancel.png';

function IndexPage() {
  return (
      <div className={styles.baseBody}>
        <div className={styles.normal}>
          {/*<h1 className={styles.title}>Yay! Welcome to dva!</h1>*/}
          {/*<div className={styles.welcome} />*/}
          {/*<ul className={styles.list}>*/}
          {/*<li>To get started, edit <code>src/index.js</code> and save to reload.</li>*/}
          {/*<li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>*/}
          {/*</ul>*/}
          {/*<label>st在学dva</label>*/}
          {/*<Header dispatch={dispatch}/>*/}
          {/*<TodoList items={need}/>*/}

        </div>
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
                <label className={styles.logoLabel}>私募基金理财顾问</label>
              </div>
            </div>
            <div className={styles.rightDiv}>
              <button className={styles.navButton}>首页</button>
              <button className={styles.navButton}>基金浏览</button>
              <button className={styles.navButton}>我的组合</button>
              <button className={styles.navButton}>个人中心</button>
            </div>
          </div>
        </div>
        <pageFoot/>
      </div>

  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
