/**
 * Created by Sorumi on 17/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AbilityBarChart extends Component {

  render() {
    let option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        bottom: 'bottom',
        data:['选股收益','行业选择收益','其他收益']
      },
      grid: {
        top: '10',
        left: '0',
        bottom:'40',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['6-30','9-30','12-30','1-30']
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel: {formatter: '{value}%'},
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'bar',
          stack: '广告',
          barWidth : 20,
          data:[10, -12, 11, 14]
        },
        {
          name:'联盟广告',
          type:'bar',
          stack: '广告',
          data:[20, -82, 11, 24]
        },
        {
          name:'视频广告',
          type:'bar',
          stack: '广告',
          data:[-50, 32, 21, -24]
        },
      ],
      color:  ['#81B6F5','#E2827E', '#F9D471']
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
export default AbilityBarChart;
