/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class FundRankingBarChart extends Component {
  render() {

    const {chartData} = this.props;
    // console.log(chartData);

    // let funds = [];
    // let seriesData = [];
    // let rankData = [];
    // for (let i = 0; i < chartData.length; i++) {
    //   funds.push(chartData[i].name);
    //   for (let j = 0; j < chartData[i].data.length; j++) {
    //     rankData.push((chartData[i].data[j].rank / chartData[i].data[j].total).toFixed(3));
    //   }
    //   seriesData.push({
    //     name: chartData[i].name,
    //     type: 'bar',
    //     data: rankData,
    //   });
    //   rankData = [];
    // }

    let seriesData = chartData.map(fund => {
      return {
        name: fund.name,
        type: 'bar',
        data: fund.data.map(d => {
          return {
            ...d,
            value: 1 - (d.rank / d.total).toFixed(2)
          }
        })
      }
    });


    let option = {
      // tooltip: {
      //   formatter: function (params) {
      //     // console.log(params);
      //     return [
      //       params.seriesName + " : " + params.data.rank + " / " + params.data.total,
      //     ].join('');
      //   }
      // },
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            // console.log(params);
            return [
              params.data.rank + " / " + params.data.total,
            ].join('');
          }
        }
      },
      legend: {
        data: chartData.map(fund => fund.name),
        bottom: '0%'
      },
      grid: {
        top: '0%',
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min: 0,
        max: 1,
      },
      yAxis: {
        type: 'category',
        data: ['1月', '3月', '6月', '1年', '2年', '3年']
      },
      series: seriesData,
      color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491']
    };

    return (
      <ReactEcharts
        option={option}
        style={{height: '500px'}}
      />
    )

  }
}

export default FundRankingBarChart;
