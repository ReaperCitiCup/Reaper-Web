/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './AccountInfo.css';
import PageFoot from '../components/PageFoot';
import Nav from '../components/Navigator';
import Content from '../components/Content';

class AccountInfo extends Component {
  render() {
    return(
      <div className={styles.baseBody}>
        <div className={styles.normal}>
          <Nav/>
          <div className={styles.mainDiv}>
            <Content/>
          </div>
        </div>

        <PageFoot/>
      </div>
    )
  }
}

AccountInfo.propTypes = {};

export default AccountInfo;
