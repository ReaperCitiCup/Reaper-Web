/**
 * Created by st on 2017/8/15.
 */
import React, {Component} from 'react'
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footDiv}>
        <p className={styles.footContent}>Copyright © 2017 Reaper. All rights reserved.</p>
      </div>
    )
  }
}

Footer.propTypes = {};

export default Footer;
