/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundManagerRadarChart extends Component {
  render() {
    let option = {
      tooltip: {},
      grid: {
        top: '0%',
        left: 10,
        right: 10,
        bottom: '8%',
        containLabel: true
      },
      radar: {
        // shape: 'circle',
        radius: 85,
        name: {
          textStyle: {
            color: '#3D5673',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          {name: '经验值', max: 6500},
          {name: '择时能力', max: 16000},
          {name: '收益率', max: 30000},
          {name: '稳定性', max: 38000},
          {name: '抗风险', max: 52000},
        ]
      },
      series: [{
        type: 'radar',
        areaStyle: {
          normal: {
            color: 'rgba(61, 86, 115, 0.25)'
          }
        },
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000],
            name: '基金经理',
            lineStyle: {
              normal: {
                color: '#3D5673'
              }
            },
            symbol: 'none'
          },
        ]
      }]
    };

    return (
      <ReactEcharts
        option={option}
        style={{height:'320px'}}
      />
    )

  }
}

export default FundManagerRadarChart;
