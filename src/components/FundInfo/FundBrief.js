/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './FundBrief.css';

class FundBrief extends Component {
  render() {
    const {fund} = this.props;

    // console.log({fund});

    return (
      <div className={"container " + styles.brief}>
        <div>
          <div className={styles.card}>
            {fund ?
              <div>
                <div className={styles.row}>
                  <div className={`${styles.section} ${styles.section_1}`}>
                    <div>
                      <h4 className={styles.sectionTitle}>净值估算</h4>
                      <div>
                        <h3>{fund.assessNetValue}</h3>
                        <div className={styles.sectionSide}>
                          <p>{fund.assessIncrease.toFixed(2)}</p>
                          <p>{fund.assessDailyRate.toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.section} ${styles.section_2}`}>
                    <div>
                      <h4 className={styles.sectionTitle}>单位净值</h4>
                      <h3>{fund.unitNetValue}</h3>
                    </div>
                  </div>
                  <div className={`${styles.section} ${styles.section_3}`}>
                    <div>
                      <h4 className={styles.sectionTitle}>累计净值</h4>
                      <h3>{fund.cumulativeNetValue}</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_4}`}>
                    <div>
                      <p>近1月：{fund.rate.oneMonth}%</p>
                      <p>近1年：{fund.rate.oneYear}%</p>
                    </div>
                  </div>
                  <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_5}`}>
                    <div>
                      <p>近3月：{fund.rate.threeMonths}%</p>
                      <p>近3年：{fund.rate.oneYear}%</p>
                    </div>
                  </div>
                  <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_6}`}>
                    <div>
                      <p>近6月：{fund.rate.sixMonths}%</p>
                      <p>成立来：{fund.rate.sinceFounded}%</p>
                    </div>
                  </div>
                </div>
              </div> : null}
          </div>
          <div className={styles.card}>
            {fund ?
              <div className={styles.row}>
                <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_4}`}>
                  <div>
                    <p>基金类型：{fund.type[0]} / {fund.type[1]}</p>
                    <p>基金规模：{fund.scope} 亿元</p>
                  </div>
                </div>
                <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_5}`}>
                  <div>
                    <p>基金经理：<a>{fund.manager[0].name}</a></p>
                    <p>管理人：<a>{fund.company.name}</a></p>
                  </div>
                </div>
                <div className={`${styles.section} ${styles.sectionNormal} ${styles.section_6}`}>
                  <div>
                    <p>基金评级：暂无评级</p>
                    <p>成立日：{fund.establishmentDate}</p>
                  </div>
                </div>
              </div> : null }
          </div>
        </div>
      </div>
    )
  }
}

FundBrief.propTypes = {};

function mapStateToProps(state) {
  return {
    // fundChart: state.fundChart.fundChart
  };
}

export default FundBrief;
