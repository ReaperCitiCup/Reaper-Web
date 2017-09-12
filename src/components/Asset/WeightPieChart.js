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
          radius: '45%',
          grid: {
            top: 0,
            bottom: 0,
            left: 50,
            right: 100,
            containLabel: true
          },
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
      color: ['#B6D7B3', '#BEE1DA', '#A7DAD8', '#92BCC3', '#93A9BD', '#B9CDDC', '#BABBDE', '#928BA9', '#CA9ECE', '#EFCEED', '#FECEDC', '#FAA5B3'],
    };
    return (
      <ReactEcharts
        option={option}
      />
    );
  }
}

export default WeightPieChart;
