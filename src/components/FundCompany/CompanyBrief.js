/**
 * Created by st on 2017/8/31.
 */
import React, {Component} from 'react';
import styles from './CompanyBrief.css';
import DivHeader from '../Util/DivHeader';

class CompanyBrief extends Component {
  render() {
    return (
      <div className={"container " + styles.brief}>
        <div className={styles.title}>
          <h1>华夏基金</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.section_a}>
            <DivHeader value={'公司旗下基金表现'}/>
          </div>
          <div className={styles.section_b}>
            <DivHeader value={'公司旗下基金经理表现'}/>
          </div>
          <div className={styles.section_a}>
            <DivHeader value={'产品策略分布'}/>
          </div>
          <div className={styles.section_b}>
            <DivHeader value={'资产配置行业占比'}/>
          </div>
          <div className={styles.section_c}>
            <DivHeader value={'风格归因'}/>
          </div>
          <div className={styles.section_c}>
            <DivHeader value={'行业归因'}/>
          </div>
        </div>
      </div>
    )
  }
}

CompanyBrief.propTypes = {};

export default CompanyBrief;
