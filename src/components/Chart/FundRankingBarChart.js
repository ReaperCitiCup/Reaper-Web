/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundRankingBarChart extends Component {
  render() {
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2011年', '2012年'],
        bottom: '0%'
      },
      grid: {
        top: '0%',
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    };

    return (
      <ReactEcharts
        option={option}
        style={{height:'300px'}}
      />
    )

  }
}

export default FundRankingBarChart;
