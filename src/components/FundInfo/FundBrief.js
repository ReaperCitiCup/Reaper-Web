/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './FundBrief.css';

class FundBrief extends Component {
  render() {
    return (
      <div className={"container " + styles.brief}>
        {/*<div className={styles.title}>*/}
          {/*<h1>华夏成长</h1>*/}
          {/*<h2>000001</h2>*/}
        {/*</div>*/}
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={`${styles.section} ${styles.section_1}`}>
              <div>
                <h4 className={styles.sectionTitle}>净值估算</h4>
                <div>
                  <h3>1.1183</h3>
                  <div className={styles.sectionSide}>
                    <p>-0.0057</p>
                    <p>-0.51%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.section} ${styles.section_2}`}>
              <div>
                <h4 className={styles.sectionTitle}>单位净值</h4>
                <h3>1.1170</h3>
              </div>
            </div>
            <div className={`${styles.section} ${styles.section_3}`}>
              <div>
                <h4 className={styles.sectionTitle}>累计净值</h4>
                <h3>3.4480</h3>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_4}`}>
              <div>
                <p>近1月：-2.02%</p>
                <p>近1年：2.70%</p>
              </div>
            </div>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_5}`}>
              <div>
                <p>近3月：0.99%</p>
                <p>近3年：21.18%</p>
              </div>
            </div>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_6}`}>
              <div>
                <p>近6月：7.40%</p>
                <p>成立来：2.70%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_4}`}>
              <div>
                <p>基金类型：混合型 / 高风险</p>
                <p>基金规模：51.09 亿元</p>
              </div>
            </div>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_5}`}>
              <div>
                <p>基金经理：<a>董阳阳</a></p>
                <p>管理人：<a>华夏基金</a></p>
              </div>
            </div>
            <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_6}`}>
              <div>
                <p>基金评级：暂无评级</p>
                <p>成立日：2011-12-18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

FundBrief.propTypes = {};

export default FundBrief;
