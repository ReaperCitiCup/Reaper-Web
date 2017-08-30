/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import styles from './DivHeader.css';

class DivHeader extends Component{
  render() {
    const {value} = this.props;
    return (
      <div>
        <p className={styles.divHeader}>{value}</p>
      </div>
    )
  }
}

export default DivHeader;
