import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AssetBarChart extends Component {

  render() {

    const {chartData} = this.props;

    let transferredData = [];
    chartData[0].quantity.forEach(quantity => {
      transferredData.push({
        index: [],
        field: quantity.field,
        data: [],
      })
    });

    transferredData.forEach(singleData => {
      chartData.forEach(dataValue => {
        singleData.data.push({
          date: dataValue.date,
          value: dataValue.quantity.filter(d => d.field === singleData.field)[0].value,
        });
        singleData.index.push(dataValue.index)
      })
    });

    // console.log(transferredData);

    let seriesData = [];
    transferredData.forEach(dataValue => {
      seriesData.push({
        name: dataValue.field,
        type: 'bar',
        barWidth: '20',
        stack: '总量',
        data: dataValue.data.map(singleData => {
          let dataArray = [];
          dataArray.push(singleData.date, singleData.value);
          return dataArray;
        })
      })
    });
    // seriesData.push({
    //   name: '舆情分析指标',
    //   type: 'line',
    //   yAxisIndex: 1,
    //   data: chartData.map(dataValue => {
    //     let dataArray = [];
    //     dataArray.push(dataValue.date, dataValue.index);
    //     return dataArray;
    //   })
    // });

    // console.log(seriesData)

    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        top: 30,
        right: 50
      },
      // toolbox: {
      //   feature: {
      //     dataView: {show: true, readOnly: false},
      //     magicType: {show: true, type: ['line', 'bar']},
      //     restore: {show: true},
      //     saveAsImage: {show: true}
      //   }
      // },
      legend: {
        bottom: 'bottom',
        data: transferredData.map(dataValue => dataValue.field)
      },
      xAxis: [
        {
          type: 'category',
          data: chartData.map(data => data.date),
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          // name: '占比',
          // min: 0,
          // max: 100,
          // interval: 20,
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          // name: '亿元',
          // min: 0,
          // max: 25,
          // interval: 5,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: seriesData,
      color:  ['#E2827E', '#F9D471']

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
export default AssetBarChart;
