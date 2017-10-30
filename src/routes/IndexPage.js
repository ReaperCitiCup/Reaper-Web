import React from 'react';
import {connect} from 'dva';
import domtoimage from 'dom-to-image';

import MainLayout from '../components/Layout/MainLayout'

import styles from './IndexPage.css';

import bg from '../assets/bg_1.png';
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';

function IndexPage() {

  let handleClickSave = () => {
    console.log("!!!!!");
    let node = document.getElementsByClassName('baseBody')[0];
    console.log(node);
    domtoimage.toPng(node)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  return (
    <div className="baseBody">
      <MainLayout>
        {/*<p>我是首页</p>*/}
        <button onClick={handleClickSave}>11111111</button>
        <div className={styles.bg_wrapper}>
          <img src={bg} className={styles.bg}/>

          <div className={styles.text_wrapper}>
            <div className={styles.left}>
              <h2>打造专业顾问服务，领先FOF新时代
                <br/>
                大数据和机器智能时代的量化投资</h2>
            </div>

            <div className={styles.right}>
              <div className={styles.line}>
                <h1>FOF - Navigator</h1>
                <h2>创建你自己的 FOF</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h4>产品优势</h4>
          <div className={styles.row}>
            <div>
              <img className={styles.icon} src={icon_1}/>
              <h5>全方位基金评价体系</h5>
              <p>
                完善的基金评价体系支撑，轻松解决选基难题
                <br/>
                舆情分析+关系图谱+精准业绩归因
                <br/>
                情感词典实现每日舆情导向把控；数据挖掘技术带来新的投资价值
              </p>
            </div>
            <div>
              <img className={styles.icon} src={icon_2}/>
              <h5>多策略资产配置方案</h5>
              <p>
                多维度基金筛选，多方案风险分散，为您提供更多选择
                <br/>
                基于全方位评价，更加优质的基金推荐
                <br/>
                一键精准回测，快速获得组合表现评估
              </p>
            </div>
            <div>
              <img className={styles.icon} src={icon_3}/>
              <h5>个性化推荐</h5>
              <p>
                今天比昨天更懂你
                <br/>
                对客户的投资行为数据、交易数据进行深度挖掘
                <br/>
                帮助客户智能获取投资偏好、分析匹配基金，成为客户投资和决策的智能助手
              </p>
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
