/**
 * Created by wyj on 2017/9/4.
 */
import React, { Component } from 'react';
import styles from './StepIcon.scss';

class StepIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNum: this.props.stepNum,
    };
  }
  render() {
    const { stepNum } = this.state;
    return (
      <div className={styles.stepIcon}>{ stepNum }</div>
    );
  }
}

export default StepIcon;
