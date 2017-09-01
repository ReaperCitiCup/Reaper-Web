/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import styles from './DivHeader.css';

class DivHeader extends Component{
  render() {
    const {children} = this.props;
    return (
      <div>
        <p className={styles.divHeader}>{children}</p>
      </div>
    )
  }
}

export default DivHeader;
