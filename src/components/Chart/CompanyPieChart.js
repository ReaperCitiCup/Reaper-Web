/**
 * Created by st on 2017/9/9.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class CompanyPieChart extends Component {

  render() {

    const {chartData} = this.props;

    console.log(chartData);

    let data = [];
    if (chartData != null && chartData != undefined) {
      for(let i = 0;i < chartData.length; i++) {
        data.push({
          value: chartData[i].value,
          name: chartData[i].field
        })
      }
    }

    console.log(data);

    let option = {
      // title : {
      //   text: '某站点用户访问来源',
      //   subtext: '纯属虚构',
      //   x:'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },
      // legend: {
      //   orient: 'vertical',
      //   bottom: 'bottom',
      //   data: ['银行', '股票', '债券', '其他']
      // },
      series: [
        {
          // name: '占净比',
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
      // color: ['#3D9970', '#FF851B', '#0074D9', '#7FDBFF', '#39CCCC', '#2ECC40', '#FFDC00', '#85144B']
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
export default CompanyPieChart;
