import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

import styles from './RateLineChart.css';

class RateLineChart extends Component {

  render() {

    let data = [["2000-06-05", 0], ["2000-06-06", 0.34], ["2000-06-07", -0.2], ["2000-06-08", -0.45], ["2000-06-09", -0.61], ["2000-06-10", -0.32], ["2000-06-11", 1.23], ["2000-06-12", 2.45], ["2000-06-13", 2.67], ["2000-06-14", 2.51], ["2000-06-15", 2.98], ["2000-06-16", 2.12], ["2000-06-17", 3.54], ["2000-06-18", 3.41], ["2000-06-19", 3.76], ["2000-06-20", 2.67], ["2000-06-21", 4.59], ["2000-06-22", 4.82], ["2000-06-23", 4.12], ["2000-06-24", 4.33], ["2000-06-25", 3.76], ["2000-06-26", 4.64], ["2000-06-27", 5.34], ["2000-06-28", 5.66], ["2000-06-29", 5.98], ["2000-06-30", 6.26], ["2000-07-01", 7.88], ["2000-07-02", 7.32], ["2000-07-03", 7.03], ["2000-07-04", 8.98], ["2000-07-05", 8.34], ["2000-07-06", 8.12], ["2000-07-07", 9.43], ["2000-07-08", 8.16], ["2000-07-09", 8.93], ["2000-07-10", 9.31], ["2000-07-11", 9.42], ["2000-07-12", 11.33], ["2000-07-13", 10.47], ["2000-07-14", 13.31], ["2000-07-15", 11.41], ["2000-07-16", 10.64], ["2000-07-17", 11.69], ["2000-07-18", 12.88], ["2000-07-19", 12.77], ["2000-07-20", 13.83], ["2000-07-21", 11.31], ["2000-07-22", 11.57], ["2000-07-23", 12.55], ["2000-07-24", 13.60]];

    let dateList = data.map(function (item) {
      return item[0];
    });
    let valueList = data.map(function (item) {
      return item[1];
    });

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

    return (

      <div>
        <div className={styles.button_wrapper}>
          <button>近 1 月</button>
          <button>近 3 月</button>
          <button>近 6 月</button>
          <button>近 1 年</button>
          <button>近 3 年</button>
          <button>成立来</button>
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
export default RateLineChart;
