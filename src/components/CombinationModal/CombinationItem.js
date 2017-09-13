import React, {Component} from 'react';
import {Slider, InputNumber} from 'antd';

import styles from './CombinationItem.css';
import trash from '../../assets/delete.png';

function CombinationItem({item, onRatioChange, onClickDelete, max}) {


  // state = {
  //   inputValue: 1,
  // };
  //
  // onChange = (value) => {
  //   this.setState({
  //     inputValue: value,
  //   });
  // };

  // render() {
    return (
      <div className={styles.item}>
        <div className={styles.name}>{item.name}</div>

        <div className={styles.slider_wrapper}>
        <Slider
          className={styles.slider}
          min={1}
          max={100}
          onChange={onRatioChange}
          value={item.ratio}
        />
        </div>
        <div className={styles.ratio_wrapper}>
          <InputNumber
            className={styles.input}
            min={1}
            max={100}
            value={item.ratio}
            onChange={onRatioChange}
          />
          <span>
            %
          </span>
        </div>
        <div className={styles.delete_wrapper}>
          <img width={16}
               src={trash}
               onClick={onClickDelete}/>
        </div>
      </div>
    )
  }
// }

export default CombinationItem;
