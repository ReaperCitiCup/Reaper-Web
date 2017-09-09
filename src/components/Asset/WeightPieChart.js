/**
 * Created by wyj on 2017/9/9.
 */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class WeightPieChart extends Component {
  render() {
    const option = {
      series: [
        {
          type: 'pie',
          radius: '70%',
          data: [
            { value: this.props.stockWeight, name: `${this.props.stockWeight}% 股票型` },
            { value: this.props.fundWeight, name: `${this.props.fundWeight}% 债券型` },
            { value: this.props.mixWeight, name: `${this.props.mixWeight}% 混合型` },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    return (
      <ReactEcharts
        option={option}
      />
    );
  }
}

export default WeightPieChart;
