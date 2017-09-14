/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

// import {data} from './NewData';

class NetworkChart extends Component {
  render() {

    const {chartData, type} = this.props;

    let categories = chartData.nodes.map(c => c.name);

    let seriesData = [];
    chartData.nodes.forEach((node, index) => {
      seriesData.push({
        category: 0,
        id: index,
        name: node.name,
      });
    });

    // console.log(seriesData)

    // console.log(categories);
    let option = {
      // legend: {
      //   data: seriesData.map(dataValue => dataValue.name),
      // },
      tooltip: {
        trigger: 'item',
      },
      series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: false,

        draggable: true,
        data: seriesData,
        // categories: seriesData.map(dataValue => dataValue.name),
        force: {
          // initLayout: 'circular'
          // repulsion: 20,
          edgeLength: 10,
          repulsion: 20,
          gravity: 0.2
        },
        edges: chartData.links,
        top: 80,
        tooltip: {
          formatter: function (params, ticket, callback) {
            // console.log(params);
            if (params.dataType === 'node') {
              return params.data.name
            } else if (params.dataType === 'edge') {
              let source = chartData.nodes[params.data.source].name;
              let target = chartData.nodes[params.data.target].name;
              console.log(params.data);
              if (type === 'fund') {
                return source + ' ' + target + '<br/> 权重：' + params.data.value
              } else if (type === 'manager') {
                return source + ' ' + target + '<br/> 共事天数：' + params.data.days +
                '<br/> 共事次数：' + params.data.times
              }
            }
          }
        },
        color: ['#F48984'],
      }]
    };


    return (
      <ReactEcharts
        option={option}
        style={{height: '700px'}}
      />
    )
  }
}

export default NetworkChart;
