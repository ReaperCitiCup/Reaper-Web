/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';

class NetworkChart extends Component {
  render() {

    let categories = [];
    for (let i = 0; i < 9; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }


    let nodes = [
      {
        "name": "AnalyserNode",
        "value": 1,
        "category": 4
      },
      {
        "name": "AudioNode",
        "value": 1,
        "category": 4
      },
      {
        "name": "Uint8Array",
        "value": 1,
        "category": 4
      }
    ];

    let links =[
      {
        "source": 0,
        "target": 1
      },
      {
        "source": 0,
        "target": 2
      },
      {
        "source": 0,
        "target": 3
      }
      ];
    let option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [{
        // selectedMode: 'single',
        data: categories.map(function (a) {
          return a.name;
        })
      }],
      animation: false,
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'force',
          data: nodes,
          links: links,
          categories: categories,
          roam: true,
          label: {
            normal: {
              position: 'right'
            }
          },
          force: {
            repulsion: 100
          }
        }
      ]
    };

    return (
      <ReactEcharts
        option={option}
      />
    )
  }
}
