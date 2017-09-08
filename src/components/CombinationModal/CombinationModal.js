import React, {Component} from 'react';
import {Input} from 'antd';

import CombinationItem from './CombinationItem';

import styles from './CombinationModal.css';

class CombinationModal extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={styles.modal + ' ' + className}>
        <h5>创建组合</h5>

        <div>
          <Input/>
          <div>
            <CombinationItem/>
          </div>
        </div>
      </div>
    )
  }
}

export default CombinationModal
