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

    // console.log(seriesData);

    let allTypes = [];
    for (let i = 0; i < chartData.length; i++) {
      let typeArray = [];
      for (let j = 0; j < chartData[i].data.length; j++) {
        typeArray.push(chartData[i].data[j].type);
      }
      allTypes.push(typeArray);
    }
    // console.log(allTypes);

    let yAxisData = allTypes[0];
    for (let i = 0; i < allTypes.length; i++) {
      yAxisData = yAxisData.concat(allTypes[i].filter(v => !yAxisData.includes(v)))
    }
    // console.log(yAxisData);


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
        bottom: '10'
      },
      grid: {
        top: 30,
        bottom: 70,
        left: 30,
        right: 30,
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
        data: yAxisData,
      },
      series: seriesData,
      // color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491']
      color: ['#E3645A', '#F48984', '#FDB8A1', '#F7CC9B', '#F8D76E', '#FEE9A5', '#F0E0BC', '#D1CCC6', '#B6D7B3', '#BEE1DA',
        '#A7DAD8', '#92BCC3', '#93A9BD', '#B9CDDC', '#BABBDE', '#928BA9', '#CA9ECE', '#EFCEED', '#FECEDC', '#FAA5B3'],
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
