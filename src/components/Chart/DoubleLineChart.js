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

    let dateList = chartData.fund.map(dataValue => dataValue.date);

    // let unionDate = dateList[0];
    // for (let i = 0; i < dateList.length; i++) {
    //   if(dateList[i].length > unionDate.length) {
    //     unionDate = dateList[i];
    //   }
    // }

    // console.log(unionDate);

    let seriesData = [];
    seriesData.push({
      name: 'fund',
      type: 'line',
      showSymbol: false,
      data: chartData.fund.map(dataValue => {
        let array = [];
        array.push(dataValue.date, dataValue.value);
        return array;
      })
    });
    seriesData.push({
      name: 'base',
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
        data: ['fund', 'base'],
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
        data: dateList
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
