/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';

import { Input, Icon, Button } from 'antd';

import styles from './AccountInfo.css';

class AccountInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div className="container">
        <div className={styles.contentBodyDiv}>
          <p className={styles.contentName}>账户信息</p>

          <div className={styles.avatar}>
            <button className={styles.modifyAvatar}>点击修改头像</button>
          </div>

          <div className={styles.accountInfo}>
            <Input
              placeholder="Enter your userName"
              prefix={<Icon type="user" />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
              className={styles.myInput}
            />
            <br/>
            {/*<Input*/}
              {/*placeholder="Enter your userName"*/}
              {/*prefix={<Icon type="mail" />}*/}
              {/*suffix={suffix}*/}
              {/*value={userName}*/}
              {/*onChange={this.onChangeUserName}*/}
              {/*ref={node => this.userNameInput = node}*/}
              {/*className={styles.myInput}*/}
            {/*/>*/}
            {/*<Input*/}
              {/*placeholder="Enter your userName"*/}
              {/*prefix={<Icon type="mobile" />}*/}
              {/*suffix={suffix}*/}
              {/*value={userName}*/}
              {/*onChange={this.onChangeUserName}*/}
              {/*ref={node => this.userNameInput = node}*/}
              {/*className={styles.myInput}*/}
            {/*/>*/}

            {/*<Input placeholder="输入验证码" className={styles.verificationCode}/>*/}

            <Input
              placeholder="原密码"
              prefix={<Icon type="unlock" />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
              className={styles.myInput}
            />

            <Input
              placeholder="新密码"
              prefix={<Icon type="lock" />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
              className={styles.myInput}
            />
            <Button icon="close-circle-o" className={styles.accountButton}>取消</Button>
            <Button icon="save" type="primary" className={styles.accountButton}>保存</Button>
          </div>
        </div>

      </div>
    )
  }
}

AccountInfo.propTypes = {};

export default AccountInfo;
