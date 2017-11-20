/**
 * Created by Sorumi on 17/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundFactorsHeatChart extends Component {

  render() {
    const {chartData} = this.props;

    let data = [];
    let max = 0;

    let xData = chartData.funds.map(fund => {
      return fund.length > 6 ?
        [fund.slice(0, fund.length / 2), '\n', fund.slice(fund.length / 2)].join('')
        : fund
    })

    for (let i = 0; i < chartData.funds.length; i++) {
      for (let j = 0; j < chartData.factors.length; j++) {
        data.push([i, j, '-'])
      }
    }

    chartData.datas.forEach(c => {
      data[c.fundIndex * chartData.factors.length + c.factorIndex] = [c.fundIndex, c.factorIndex, c.value]
    });

    chartData.datas.forEach(data => {
      if (data.value > max) {
        max = data.value
      }
    })

    console.log(chartData.datas)
    console.log(max)


    let option = {
      tooltip: {
        position: 'top'
      },
      animation: false,
      grid: {
        height: '65%',
        y: '10%',
        // left: '20%'
      },
      xAxis: {
        type: 'category',
        data: xData,
        splitArea: {
          show: true
        },
        nameRotate: 30
      },
      yAxis: {
        type: 'category',
        data: chartData ? chartData.factors : null,
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: 0,
        max: max,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%'
      },
      series: [{
        // name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    return (

      <ReactEcharts
        option={option}
        style={{height: '400px'}}
        // notMerge={true}
        // lazyUpdate={true}
        // theme={"theme_name"}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
      />
    )
  }
}

export default FundFactorsHeatChart;
