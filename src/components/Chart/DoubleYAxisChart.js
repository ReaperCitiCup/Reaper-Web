/**
 * Created by st on 2017/9/11.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';

class DoubleYAxisChart extends Component {
  render() {

    const {chartData} = this.props;
    console.log(chartData);


    let minDate;
    let maxDate;
    let fundMin, fundMax, baseMin, baseMax;

    let fund = chartData.fund;
    if (fund[0] && fund[fund.length - 1]) {
      fundMin = fund[0].date;
      fundMax = fund[fund.length - 1].date;
    }


    let base = chartData.base;
    if (base[0] && base[base.length - 1]) {
      baseMin = base[0].date;
      baseMax = base[base.length - 1].date;
    }
    minDate = fundMin < baseMin ? fundMin : baseMin;
    maxDate = fundMax > baseMax ? fundMax : baseMax;
    // console.log(minDate, maxDate)

    let dateArray = [];
    let currentDate = new Date(minDate);
    // console.log(currentDate);

    // console.log(minDate[0], minDate[1], minDate[2], currentDate)
    while (currentDate <= new Date(maxDate)) {
      dateArray.push(new Date(currentDate).toISOString().substring(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // console.log(dateArray)
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
      yAxisIndex: 1,
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

    console.log(seriesData)

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
      yAxis: [
        {
          type: 'value',
          splitLine: {show: false},
          name: '基金组合'
        },
        {
          type: 'value',
          splitLine: {show: false},
          name: '基准'
        },
      ],
      series: [
        seriesData[0],
        seriesData[1],
      ],
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

export default DoubleYAxisChart;
