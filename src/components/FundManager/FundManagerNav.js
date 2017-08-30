/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import styles from './FundManagerNav.css';

class FundManagerNav extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <button className={styles.managerNameButton}>董阳阳</button>
          <button className={styles.managerNameButton}>徐利明</button>
        </div>
      </div>
    )
  }
}

export default FundManagerNav;
