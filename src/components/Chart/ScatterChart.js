/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class ScatterChart extends Component {

  render() {

    const {chartData} = this.props;

    // console.log(chartData)

    let dataNow;
    let dataOthers;

    if (chartData) {
      if (chartData.funds) {
        dataNow = chartData.funds.map(point =>
          [point.rate, point.risk, point.name]
        );
      } else if (chartData.managers) {
        dataNow = chartData.managers.map(point =>
          [point.rate, point.risk, point.name]
        );
      }

      if (chartData.others) {
        dataOthers = chartData.others.map(point =>
          [point.rate, point.risk, point.name]
        );
      }
    }


    // console.log(data);

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
          return params.value[2] + ' :<br/>' + '收益率：' + params.value[0] + '<br/>'
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
      legend: {
        data: ['其他', '当前'],
        left: 'center'
      },
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
          name: '其他',
          type: 'scatter',
          data: dataOthers,
          symbolSize: 5,
          itemStyle: {
            normal: {
              opacity: 0.3
            }
          }
        },
        {
          name: '当前',
          type: 'scatter',
          data: dataNow,
          symbolSize: 5,
          // itemStyle: {
          //   normal: {
          //     opacity: 0.5
          //   }
          // }
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
        },
      ],
      color: ['#81B6F5', '#E2827E']
    };

    return (
      <ReactEcharts
        option={option}
      />
    )

  }
}

export default ScatterChart;
