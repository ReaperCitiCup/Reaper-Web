import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class StabilityRadarChart extends Component {
  render() {

    const {chartData} = this.props;

    let data = chartData;


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
