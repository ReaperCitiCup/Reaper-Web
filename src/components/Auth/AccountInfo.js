/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import {Form, Input, Icon, Button} from 'antd';

import styles from './AccountInfo.css';

const FormItem = Form.Item;

class AccountInfo extends Component {

  state = {
    confirmDirty: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userName: '',
  //   };
  // }
  // emitEmpty = () => {
  //   this.userNameInput.focus();
  //   this.setState({ userName: '' });
  // };
  // onChangeUserName = (e) => {
  //   this.setState({ userName: e.target.value });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        const {dispatch} = this.props;
        dispatch({
          type: 'user/editPassword',
          payload: values
        })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致！');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  render() {
    // const { userName } = this.state;
    // const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 4,
        },
      },
    };
    return (
      <div className="container">
        <div className={styles.contentBodyDiv}>
          <p className={styles.contentName}>账户信息</p>

          {/*<div className={styles.avatar}>*/}
            {/*<button className={styles.modifyAvatar}>点击修改头像</button>*/}
          {/*</div>*/}

          <div className={styles.accountInfo}>
            {/*<Input*/}
            {/*placeholder="Enter your userName"*/}
            {/*prefix={<Icon type="user" />}*/}
            {/*suffix={suffix}*/}
            {/*value={userName}*/}
            {/*onChange={this.onChangeUserName}*/}
            {/*ref={node => this.userNameInput = node}*/}
            {/*className={styles.myInput}*/}
            {/*/>*/}
            <h6 className={styles.username}>用户名</h6>

            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="旧密码"
                hasFeedback
              >
                {getFieldDecorator('old', {
                  rules: [{
                    required: true, message: '请输入旧密码！',
                  }],
                })(
                  <Input type="password"/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="新密码"
                hasFeedback
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入新密码！',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password"/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="确认密码"
                hasFeedback
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请再次输入新密码！!',
                  }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur}/>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button icon="save"
                        type="primary"
                        htmlType="submit"
                        className={styles.accountButton}>保存</Button>
              </FormItem>
            </Form>
            {/*<Input*/}
            {/*placeholder="原密码"*/}
            {/*size="large"*/}
            {/*prefix={<Icon type="unlock" />}*/}
            {/*suffix={suffix}*/}
            {/*value={userName}*/}
            {/*onChange={this.onChangeUserName}*/}
            {/*ref={node => this.userNameInput = node}*/}
            {/*className={styles.myInput}*/}
            {/*/>*/}

            {/*<Input*/}
            {/*placeholder="新密码"*/}
            {/*size="large"*/}
            {/*prefix={<Icon type="lock" />}*/}
            {/*suffix={suffix}*/}
            {/*value={userName}*/}
            {/*onChange={this.onChangeUserName}*/}
            {/*ref={node => this.userNameInput = node}*/}
            {/*className={styles.myInput}*/}
            {/*/>*/}
            {/*<Button icon="close-circle-o" className={styles.accountButton}>取消</Button>*/}
            {/*<Button icon="save" type="primary" className={styles.accountButton}>保存</Button>*/}
          </div>
        </div>

      </div>
    )
  }
}

AccountInfo.propTypes = {};

export default connect()(Form.create()(AccountInfo));
