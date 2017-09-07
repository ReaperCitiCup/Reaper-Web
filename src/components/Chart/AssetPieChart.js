import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AssetPieChart extends Component {

  render() {

    const {chartData} = this.props;

    let data = [];
    if (chartData != null && chartData != undefined) {
      data.push({value: chartData.bank, name: '银行'});
      data.push({value: chartData.stock, name: '股票'});
      data.push({value: chartData.bond, name: '债券'});
      data.push({value: chartData.other, name: '其他'});
    }

    // console.log(data);
    let option = {
      // title : {
      //   text: '某站点用户访问来源',
      //   subtext: '纯属虚构',
      //   x:'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        bottom: 'bottom',
        data: ['银行', '股票', '债券', '其他']
      },
      series: [
        {
          name: '占净比',
          type: 'pie',
          radius: '55%',
          center: ['50%', '40%'],
          data: data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      color: ['#81B6F5', '#E2827E', '#F9D471', '#B6F997']
    };

    return (

      <ReactEcharts
        option={option}
        // style={{height:'300px'}}
        // notMerge={true}
        // lazyUpdate={true}
        // theme={"theme_name"}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
      />
    )
  }
}
export default AssetPieChart;
