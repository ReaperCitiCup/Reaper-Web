/**
 * Created by st on 2017/9/11.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';

class DoubleLineChart extends Component {
  render() {

    const {chartData} = this.props;
    // console.log(chartData);


    let minDate;
    let maxDate;

    chartData.forEach(fund => {
      if (fund.data[0] && fund.data[fund.data.length - 1]) {
        let min = fund.data[0].date;
        let max = fund.data[fund.data.length - 1].date;
        minDate = minDate < min ? minDate : min;
        maxDate = maxDate > max ? maxDate : max;
      }
    });

    minDate = minDate.split('-');
    maxDate = maxDate.split('-');

    let dateArray = [];
    let currentDate = new Date(minDate[0], minDate[1], minDate[2]);

    while (currentDate <= new Date(maxDate[0], maxDate[1], maxDate[2])) {
      dateArray.push(new Date(currentDate).toISOString().substring(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // let dateList = chartData.fund.map(dataValue => dataValue.date);


    let seriesData = [];
    seriesData.push({
      name: '基金组合',
      type: 'line',
      showSymbol: false,
      data: chartData.fund.map(dataValue => {
        let array = [];
        array.push(dataValue.date, dataValue.value);
        return array;
      })
    });
    seriesData.push({
      name: '基准',
      type: 'line',
      showSymbol: false,
      data: chartData.base.map(dataValue => {
        let array = [];
        array.push(dataValue.date, dataValue.value);
        return array;
      })
    });


    // let seriesData = chartData.map(dataValue => {
    //   let pointArray = [];
    //   dataValue.forEach(point => {
    //     pointArray.push([point.date, point.value]);
    //   });
    //   return {
    //     name: dataValue.name,
    //     type: 'line',
    //     showSymbol: false,
    //     data: pointArray,
    //   }
    // });

    // console.log(seriesData)

    let option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['基金组合', '基准'],
        bottom: '0%',
      },
      grid: {
        top: 30,
        bottom: 30,
        left: 30,
        right: 50,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateArray
      },
      yAxis: {
        type: 'value',
        splitLine: {show: false}
      },
      series: seriesData,
      color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491']
    };

    return (
      <ReactEcharts
        option={option}
        // style={{width:'900px'}}
      />
    )
  }
}

export default DoubleLineChart;
