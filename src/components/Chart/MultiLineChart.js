/**
 * Created by st on 2017/9/9.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';

class MultiLineChart extends Component {
  render() {

    const {chartData} = this.props;
    // console.log(chartData);

    let dateList = chartData.map(fund => fund.data.map(d => d.date));

    let unionDate = dateList[0];
    for (let i = 0; i < dateList.length; i++) {
      if(dateList[i].length > unionDate.length) {
        unionDate = dateList[i];
      }
    }

    // console.log(unionDate);


    let seriesData = chartData.map(fund => {
      let pointArray = [];
      fund.data.forEach(point => {
        pointArray.push([point.date, point.value]);
      });
      return {
        name: fund.name,
        type: 'line',
        showSymbol: false,
        data: pointArray,
      }
    });

    // console.log(seriesData)

    let option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: chartData.map(fund => fund.name),
        bottom: '0',
        padding: [
          500,  // 上
          10, // 右
          20,  // 下
          10, // 左
        ]
      },
      grid: {
        top: 30,
        bottom: 70,
        left: 30,
        right: 30,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: unionDate
      },
      yAxis: {
        type: 'value',
        splitLine: {show: false}
      },
      series: seriesData,
      // color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491']
      color: ['#E3645A', '#F48984', '#FDB8A1', '#F7CC9B', '#F8D76E', '#FEE9A5', '#F0E0BC', '#D1CCC6', '#B6D7B3', '#BEE1DA',
        '#A7DAD8', '#92BCC3', '#93A9BD', '#B9CDDC', '#BABBDE', '#928BA9', '#CA9ECE', '#EFCEED', '#FECEDC', '#FAA5B3'],
    };

    return (
      <ReactEcharts
        option={option}
        style={{height:'400px'}}
      />
    )
  }
}

export default MultiLineChart;
