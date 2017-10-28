import React, {Component} from 'react';
import {connect} from 'dva';
import {Spin} from 'antd';

class Loading extends Component {
  render() {
    return (
      <div className="loadingWrapper">
        <Spin tip="Loading..."/>
      </div>
    )
  }
}

Loading.propTypes = {};

export default Loading;
