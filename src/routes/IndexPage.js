import React from 'react';
import {connect} from 'dva';

import MainLayout from '../components/Layout/MainLayout'

import styles from './IndexPage.css';

import bg from '../assets/bg_1.png';
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';

function IndexPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        {/*<p>我是首页</p>*/}
        <div className={styles.bg_wrapper}>
          <img src={bg} className={styles.bg}/>

          <div className={styles.text_wrapper}>
            <div className={styles.left}>
              <h2> FOF </h2>
            </div>

            <div className={styles.right}>


              <h1>FOF - Navigator</h1>
              <h2>创建你自己的 FOF</h2>
            </div>
          </div>
        </div>
          <div className={styles.section}>
            <h4>产品优势</h4>
            <div className={styles.row}>
              <div>
                <img className={styles.icon} src={icon_1}/>
                <h5>标题</h5>
                <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
              </div>
              <div>
                <img className={styles.icon} src={icon_2}/>
                <h5>标题</h5>
                <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
              </div>
              <div>
                <img className={styles.icon} src={icon_3}/>
                <h5>标题</h5>
                <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
              </div>
            </div>
          </div>
      </MainLayout>
    </div>

  );
}

IndexPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(IndexPage);
