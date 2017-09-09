/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class ScatterChart extends Component {

  render() {

    const {chartData} = this.props;

    let data = chartData.map(fund => {
      // let pointArray = [];
      // pointArray.push([fund.rate, fund.risk]);
      return [fund.rate, fund.risk];
    });

    console.log(data);

    let option = {
      grid: {
        top: '10%',
        left: '3%',
        right: '7%',
        bottom: '10%',
        containLabel: true
      },
      tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function (params) {
          // console.log(params)
          return '收益率：' + params.value[0] + '<br/>'
            + '风险：' + params.value[1];

        },
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        }
      },
      // toolbox: {
      //   feature: {
      //     dataZoom: {},
      //     brush: {
      //       type: ['rect', 'polygon', 'clear']
      //     }
      //   }
      // },
      // brush: {},
      xAxis: [
        {
          type: 'value',
          scale: true,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '经理',
          type: 'scatter',
          data: data,
          // markPoint: {
          //   data: [
          //     {type: 'max', name: '最大值'},
          //     {type: 'min', name: '最小值'}
          //   ]
          // },
          // markLine: {
          //   lineStyle: {
          //     normal: {
          //       type: 'solid'
          //     }
          //   },
          //   data: [
          //     {type: 'average', name: '平均值'},
          //     {xAxis: 160}
          //   ]
          // }
        }
      ]
    };

    return (
      <ReactEcharts
        option={option}
      />
    )

  }
}

export default ScatterChart;
