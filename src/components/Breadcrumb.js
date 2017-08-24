/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './Breadcrumb.css';

class Breadcrumb extends Component {
  render() {
    return (
      <div className={styles.breadcrumbBody}>
        <label className={styles.breadcrumb}>xxxx >> xxxxx</label>
      </div>
    )
  }
}

Breadcrumb.propTypes = {};

export default Breadcrumb;
