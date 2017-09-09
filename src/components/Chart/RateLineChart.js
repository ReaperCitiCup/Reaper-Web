import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';

import styles from './RateLineChart.css';

class RateLineChart extends Component {

  render() {

    const {chartData, dispatch} = this.props;

    let dateList = [];
    let valueList = [];

    if (chartData) {
      for (let i = 0; i < chartData.length; i++) {
        dateList.push(chartData[i].date);
        valueList.push(chartData[i].value);
      }
    }

    let option = {

      // Make gradient line here
      // visualMap: [{
      //   show: false,
      //   type: 'continuous',
      //   seriesIndex: 0,
      //   min: 0,
      //   max: 400
      // }, {
      //   show: false,
      //   type: 'continuous',
      //   seriesIndex: 1,
      //   dimension: 0,
      //   min: 0,
      //   max: dateList.length - 1
      // }],


      // title: {
      //   left: 'center',
      //   text: 'Gradient along the y axis'
      // },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: dateList
      },
      yAxis: {
        splitLine: {show: false}
      },
      grid: {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
      },
      series: {
        type: 'line',
        showSymbol: false,
        data: valueList,
        itemStyle: {
          normal: {
            color: '#81B6F5'
          }
        },
      }
    };

    function onClick(event) {
      console.log(event.target.value);
      dispatch({
        type: 'fundChart/fetchCumulativeProfitData',
        payload: event.target.value,
      })
    }

    return (

      <div>
        <div className={styles.button_wrapper}>
          <button onClick={onClick} value="1">近 1 月</button>
          <button onClick={onClick} value="3">近 3 月</button>
          <button onClick={onClick} value="6">近 6 月</button>
          <button onClick={onClick} value="12">近 1 年</button>
          <button onClick={onClick} value="36">近 3 年</button>
          <button onClick={onClick} value="all">成立来</button>
        </div>
        <ReactEcharts
          option={option}
          // style={{height:'300px'}}
          // notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
        />
      </div>
    )
  }
}

RateLineChart.propTypes = {};

function mapStateToProps(state) {
  return {
    chartData: state.fundChart.cumulativeProfitData
  };
}

export default connect(mapStateToProps)(RateLineChart);
