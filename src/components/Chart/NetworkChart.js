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
    let seriesData = [];
    chartData.nodes.forEach((node, index) => {
      seriesData.push({
        category: 0,
        id: index,
        name: node.name,
      });
    });

    function handleOnClick(params) {
      if(params.dataType === 'node') {
        console.log(params.data);
      }
    }

    let onEvents = {
      'click': handleOnClick
    };

    let option = {
      tooltip: {
        trigger: 'item',
      },
      series: [{
        type: 'graph',
        layout: 'force',
        top: 20,
        bottom: 20,
        animation: false,
        cursor: 'pointer',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top'
        //   }
        // },
        roam: true,
        draggable: true,
        data: seriesData,
        force: {
          repulsion: 100,
          edgeLength: 100,
        },
        edges: chartData.links,
        // top: 80,
        tooltip: {
          formatter: function (params, ticket, callback) {
            if (params.dataType === 'node') {
              // return params.data.name
            } else if (params.dataType === 'edge') {
              let source = chartData.nodes[params.data.source].name;
              let target = chartData.nodes[params.data.target].name;
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
      }],
    };


    return (
      <ReactEcharts
        option={option}
        style={{height: '500px'}}
        onEvents={onEvents}
      />
    )
  }
}

export default NetworkChart;
