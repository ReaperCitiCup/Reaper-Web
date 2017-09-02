/**
 * Created by Sorumi on 17/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AttributionBarChart extends Component {

  render() {

    let {color} = this.props;

    color = color ? color : '#81B6F5';

    let option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{c}%'
      },
      grid: {
        top: 0,
        bottom: 30,
        left: 40,
      },
      xAxis: {
        type: 'value',
        axisLabel: {formatter: '{value}%'}
        // position: 'bottom',
        // splitLine: {lineStyle: {type: 'dashed'}},
      },
      yAxis: {
        type: 'category',
        axisTick: {show: false},
        data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
      },
      series: [
        {
          // name: '生活费',
          type: 'bar',
          // stack: '总量',
          // label: {
          // normal: {
          //   show: true,
          // formatter: '{b}'
          // }
          // },
          data: [-8, 2, 4, 10, 4, 0, 9, 3, 1, 7]

        }
      ],
      color: [color]
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
export default AttributionBarChart;
