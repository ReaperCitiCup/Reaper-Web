/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

import {data} from './NewData';

class NetworkChart extends Component {
  render() {
    let categories = data.categories.map(c => c.name);

    let option = {
      legend: {
        data:categories
      },
      tooltip: {
        trigger: 'item',
      },
      series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: false,

        draggable: true,
        data: data.nodes.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        categories: data.categories,
        force: {
          // initLayout: 'circular'
          // repulsion: 20,
          edgeLength: 10,
          repulsion: 20,
          gravity: 0.2
        },
        edges: data.links,
        top: 80,
        tooltip: {
          formatter: function (params, ticket, callback) {
            if (params.dataType === 'node') {
              return params.data.name
            } else if (params.dataType === 'edge') {
              let source = data.nodes[params.data.source].name;
              let target = data.nodes[params.data.target].name;
              return source + ' ' + target + '<br/> 权重：' + params.data.value
            }
          }
        }
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
