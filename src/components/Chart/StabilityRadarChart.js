import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class StabilityRadarChart extends Component {
  render() {

    const {chartData} = this.props;

    let data = [
      {field: "beta", value: 24.14},
      {field: "价值", value: 60.57},
      {field: "动量", value: 19.50},
      {field: "市值", value: 92.47},
      {field: "成长性", value: 82.62},
      {field: "杠杆率", value: 39.14},
      {field: "波动率", value: 10.39},
      {field: "流动性", value: 58.20},
      {field: "特殊性成分", value: 23.49},
      {field: "盈利能力", value: 85.38},
      {field: "行业", value: 74.39},
      {field: "非线性市值", value: 8.49},
    ];


    let indicator = data.map(d => {
      return {
        name: d.field,
        max: 100
      }
    });


    let option = {
      tooltip: {},
      radar: {
        // shape: 'circle',
        radius: 90,
        name: {
          textStyle: {
            color: '#3D5673',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: indicator,
        splitArea: {
          show: false
        },
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
            value: data.map(d => d.value),
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

export default StabilityRadarChart;
