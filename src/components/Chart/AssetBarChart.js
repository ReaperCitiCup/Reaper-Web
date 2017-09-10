import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AssetBarChart extends Component {

  render() {

    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        top: 30,
        right: 50
      },
      // toolbox: {
      //   feature: {
      //     dataView: {show: true, readOnly: false},
      //     magicType: {show: true, type: ['line', 'bar']},
      //     restore: {show: true},
      //     saveAsImage: {show: true}
      //   }
      // },
      legend: {
        bottom: 'bottom',
        data: ['现金', '股票', '债券', '资产规模']
      },
      xAxis: [
        {
          type: 'category',
          data: ['第一季度', '第二季度', '第三季度', '第四季度'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '占比',
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {
            formatter: '{value} %'
          }
        },
        {
          type: 'value',
          name: '亿元',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} 亿元'
          }
        }
      ],
      series: [
        {
          name: '现金',
          type: 'bar',
          data: [12.0, 13.9, 57.0, 23.2]
        },
        {
          name: '股票',
          type: 'bar',
          data: [92.6, 15.9, 91.0, 12.4]
        },
        {
          name: '债券',
          type: 'bar',
          data: [92.6, 15.9, 91.0, 12.4]
        },
        {
          name: '资产规模',
          type: 'line',
          yAxisIndex: 1,
          data: [5, 12.2, 23.3, 14.5]
        }
      ],
      color:  ['#81B6F5','#E2827E', '#F9D471', '#474457']

    };

    return (

      <ReactEcharts
        option={option}
        // style={{height:'300px'}}
        // notMerge={true}
        // lazyUpdate={true}
        // theme={"theme_name"}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
      />
    )
  }
}
export default AssetBarChart;
