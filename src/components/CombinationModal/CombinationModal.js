import React, {Component} from 'react';
import {Input, Button} from 'antd';

import CombinationItem from './CombinationItem';

import up from '../../assets/caretup.png';
import down from '../../assets/caretdown.png';

import styles from './CombinationModal.css';

class CombinationModal extends Component {

  state = {
    show: true,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const {className} = this.props;
    return (
      <div className={styles.modal + ' ' + className}>
        <div className={styles.title_wrapper}>
          <h5>创建组合</h5>
          <img width={20} src={up}/>
        </div>

        <div>
          <Input className={styles.input}
                 size="large"
                 placeholder="输入组合名称"/>
          <div className={styles.item_list}>
            <CombinationItem/>
            <CombinationItem/>
            <CombinationItem/>
          </div>
          <Button
            className={styles.button}
            type="primary"
            size="large"
          >保存</Button>
        </div>

      </div>
    )
  }
}

export default CombinationModal
