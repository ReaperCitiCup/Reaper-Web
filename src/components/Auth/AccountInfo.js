/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import icon from '../../assets/user.png';
import styles from './AccountInfo.css';

class AccountInfo extends Component {
  render() {
    return(
      <div className={styles.contentBodyDiv}>
        <p className={styles.contentName}>账户信息</p>

        <div className={styles.avatar}>
          <button className={styles.modifyAvatar}>点击修改头像</button>
        </div>

        <div className={styles.accountInfo}>
          <img src={icon} alt={"icon"} className={styles.iconImage}></img>
          <input className={styles.textInfo}></input>
        </div>

      </div>
    )
  }
}

AccountInfo.propTypes = {};

export default AccountInfo;
