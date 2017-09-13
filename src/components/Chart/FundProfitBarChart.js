/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundProfitBarChart extends Component {
  render() {

    const {chartData} = this.props;
    // console.log(chartData);
    let option = {
      color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '80',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: chartData.map(fund => fund.name),
          nameRotate: 90,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            rotate: 60
          }

        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '收益',
          type: 'bar',
          barWidth: chartData.length > 5 ? '15' : '30',
          data: chartData.map(fund => fund.returns),
        }
      ],

    };

    return (
      <ReactEcharts
        option={option}
        style={{height:'500px'}}
      />
    )

  }
}

export default FundProfitBarChart;
