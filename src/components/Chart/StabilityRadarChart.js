import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class StabilityRadarChart extends Component {
  render() {

    const {chartData, type} = this.props;

    let data = chartData;


    let indicator = data.map(d => {
      return {
        name: d.field,
        min: -50,
        max: 300
      }
    });


    let option = {
      tooltip: {
        // formatter: function (params) {
        //   console.log(params);
        // }
      },
      radar: {
        // shape: 'circle',
        radius: 80,
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
        name: type,
        type: 'radar',
        areaStyle: {
          normal: {
            color: '#81B6F5',
            opacity: 0.3
          }
        },
        data: [
          {
            value: data.map(d => d.value.toFixed(3)),
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
