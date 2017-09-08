import React, {Component} from 'react';
import {Slider, InputNumber} from 'antd';

import styles from './CombinationItem.css';
import trash from '../../assets/delete.png';

class CombinationItem extends Component {

  state = {
    inputValue: 1,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <div className={styles.item}>
        <div className={styles.name}>111</div>

        <div className={styles.slider_wrapper}>
        <Slider
          className={styles.slider}
          min={1}
          max={100}
          onChange={this.onChange}
          value={this.state.inputValue}
        />
        </div>
        <div className={styles.ratio_wrapper}>
          <InputNumber
            className={styles.input}
            min={1}
            max={100}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
          <span>
            %
          </span>
        </div>
        <div className={styles.delete_wrapper}>
          <img width={16} src={trash}/>
        </div>
      </div>
    )
  }
}

export default CombinationItem;
