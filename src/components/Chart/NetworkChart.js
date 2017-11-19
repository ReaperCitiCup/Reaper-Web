/**
 * Created by st on 2017/9/1.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

// import {data} from './NewData';

class NetworkChart extends Component {

  handleOnClick = (params) => {
    const {dispatch} = this.props;
    if (params.dataType === 'node') {
      dispatch(routerRedux.push(`/fund/${params.data.code}`))
    }
  }

  render() {
    const {chartData, type} = this.props;
    let seriesData = [];
    chartData.nodes.forEach((node, index) => {
      seriesData.push({
        category: node.category,
        id: index,
        code: node.code,
        name: node.name,
      });
    });

    let categories = seriesData.map(data => {
      let category = [];
      if (!category.includes(data.category)) {
        category.push(data.category)
      }
      return category
    });

    let onEvents = {
      'click': this.handleOnClick
    };

    let option = {
      tooltip: {
        trigger: 'item',
      },
      // legend: [{
      //   // selectedMode: 'single',
      //   data: categories.map(cat => {
      //     return cat;
      //   })
      // }],
      series: [{
        type: 'graph',
        layout: 'force',
        top: 20,
        bottom: 20,
        animation: false,
        cursor: 'pointer',
        categories: categories,
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top'
        //   }
        // },
        roam: true,
        draggable: false,
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
        color: ['#B6D7B3', '#F48984', '#F9D471', '#A7DAD8',
          '#92BCC3', '#93A9BD', '#B9CDDC', '#BABBDE', '#928BA9', '#EFCEED', '#FECEDC', '#FAA5B3'],
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

export default connect()(NetworkChart);
