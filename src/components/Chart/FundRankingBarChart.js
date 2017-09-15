/**
 * Created by st on 2017/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

import styles from "./FundRankingBarChart.css";

class FundRankingBarChart extends Component {

  constructor(props) {

    if (!props)  {
      super();
      return;
    }
    super(props);
    const {chartData} = props;

    let allTypes = [];
    for (let i = 0; i < chartData.length; i++) {
      let typeArray = [];
      for (let j = 0; j < chartData[i].data.length; j++) {
        typeArray.push(chartData[i].data[j].type);
      }
      allTypes.push(typeArray);
    }

    let yAxisData = allTypes[0];
    for (let i = 0; i < allTypes.length; i++) {
      yAxisData = yAxisData.concat(allTypes[i].filter(v => !yAxisData.includes(v)))
    }
    // console.log(yAxisData);

    this.state = {
      allTypes: yAxisData,
      type: yAxisData[0],
      barColor: ['#E3645A'],
    }
  }

  onClick = (value) => {
    const colorArray = ['#E3645A', '#F48984', '#FDB8A1', '#F7CC9B', '#F8D76E', '#FEE9A5', '#F0E0BC', '#D1CCC6', '#B6D7B3', '#BEE1DA',
      '#A7DAD8', '#92BCC3', '#93A9BD', '#B9CDDC', '#BABBDE', '#928BA9', '#CA9ECE', '#EFCEED', '#FECEDC', '#FAA5B3'];
    let barColor = [];
    barColor.push(colorArray.sort(function(){return 0.5-Math.random();}).slice(0,1));
    this.setState({
      type: value,
      barColor: barColor,
    })
  };

  render() {
    const {chartData} = this.props;
    const {type, allTypes, barColor} = this.state;
    // console.log(chartData);
    // console.log(barColor);

    let partData =[];
    chartData.forEach(fund => {
      let fieldDatas = fund.data.filter(t => t.type === type);

      if (fieldDatas.length > 0 )
        partData.push({
          id: fund.id,
          name: fund.name,
          value: 1 - (fieldDatas[0].rank / fieldDatas[0].total).toFixed(2),
          rank: fieldDatas[0].rank,
          total: fieldDatas[0].total
        })
    });


    // console.log('!!', partData)

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
            return [
              params.data.rank + " / " + params.data.total,
            ].join('');
          }
        }
      },
      grid: {
        top: 30,
        bottom: 20,
        left: 10,
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
        data: partData.map(fund => fund.name),
      },
      series:[{
        name: type,
        type: 'bar',
        data: partData
      }],
      // color: ['#81B6F5', '#E2827E', '#F9D471', '#74D491']
      color: barColor,
    };

    return (
      <div  style={{height:  `500px`}}>
        <div className={styles.button_wrapper}>
          {allTypes.map(type =>
          <button onClick={() => this.onClick(type)}
                  key={type}
                  value={type}>{type}</button>)}
        </div>
      <ReactEcharts
        option={option}
        style={{height:  `450px`}}
      />
      </div>
    )

  }
}

export default FundRankingBarChart;
