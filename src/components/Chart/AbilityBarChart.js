/**
 * Created by Sorumi on 17/9/2.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class AbilityBarChart extends Component {

  render() {
    const {chartData} = this.props;

    // let test = chartData.map(singleDate => {
    //   let dataArray = [];
    //   singleDate.data.forEach(singleData => {
    //       // if (singleData.field === '选股收益') {
    //       //   dataArray.push(singleData.value);
    //       // }
    //     dataArray.push(singleData.value);
    //     }
    //   );
    //   return dataArray;
    // });

    // console.log(chartData)

    let field = [];
    chartData[0].data.forEach(fieldValue => {
      field.push(
        {
          field: fieldValue.field,
          data: []
        }
      );
    });

    field.forEach(fieldValue => {
      chartData.forEach(dateValue => {
        fieldValue.data.push(
          {
            date: dateValue.date,
            value: dateValue.data.filter(d => d.field === fieldValue.field)[0].value
          }
        )
      })
    });

    // console.log(field);

    let seriesData = [];
    field.forEach(fieldValue => {
      seriesData.push({
        name: fieldValue.field,
        type: 'bar',
        barWidth: '30',
        stack: '总量',
        data: fieldValue.data.map(dataValue => {
          let dataArray = [];
          dataArray.push(dataValue.date, dataValue.value);
          return dataArray;
        }),
      })
    });


    // console.log(seriesData);

    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        bottom: 'bottom',
        data: field.map(singleField => singleField.field),
      },
      grid: {
        top: '10',
        left: '0',
        bottom: '40',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: chartData.map(data => data.date),
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {formatter: '{value}%'},
        }
      ],
      series: seriesData,
      color: ['#81B6F5', '#E2827E', '#F9D471']
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
export default AbilityBarChart;
