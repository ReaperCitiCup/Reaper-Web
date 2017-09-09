/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundManagerRadarChart extends Component {
  render() {

    const {chartData} = this.props;

    let data = [];
    data.push(chartData.experience);
    data.push(chartData.timing);
    data.push(chartData.returns);
    data.push(chartData.stability);
    data.push(chartData.antirisk);

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
          {name: '经验值', max: 100},
          {name: '择时能力', max: 100},
          {name: '收益率', max: 100},
          {name: '稳定性', max: 100},
          {name: '抗风险', max: 100},
        ]
      },
      series: [{
        type: 'radar',
        areaStyle: {
          normal: {
            color: '#81B6F5',
            opacity: 0.3
          }
        },
        data: [
          {
            value: data,
            name: '基金经理',
            lineStyle: {
              normal: {
                color: '#81B6F5',
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
        style={{height: '320px'}}
      />
    )

  }
}

export default FundManagerRadarChart;
