/**
 * Created by Sorumi on 17/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AttributionBarChart extends Component {

  render() {

    const {color, chartData} = this.props;

    let data = chartData ? chartData.sort((a, b) => a.value - b.value) : null;

    let newColor = color ? color : '#81B6F5';

    // console.log(data);

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
        left: 100,
        right: 20,
      },
      xAxis: {
        type: 'value',
        axisLabel: {formatter: '{value}'}
        // position: 'bottom',
        // splitLine: {lineStyle: {type: 'dashed'}},
      },
      yAxis: {
        type: 'category',
        axisTick: {show: false},
        data: data ? data.map(type => type.field) : null,
      },
      series: [
        {
          // name: '生活费',
          type: 'bar',
          data: data ? data.map(type => type.value.toFixed(3)) : null,

        }
      ],
      color: [newColor]
    };
    if (chartData.length < 5) {
      return (

        <ReactEcharts
          option={option}
          style={{height: '220px'}}
          // notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
        />
      )
    } else if (chartData.length > 10) {
      return (

        <ReactEcharts
          option={option}
          style={{height: '600px'}}
          // notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
        />
      )
    } else {
      return (
        <ReactEcharts
          option={option}
          style={{height: '300px'}}
          // notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
        />
      )
    }


  }
}
export default AttributionBarChart;
