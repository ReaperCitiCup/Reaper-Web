import React, {Component} from 'react';
import {connect} from 'dva';
import {Tabs, Form, Icon, Input, Button, Checkbox, message} from 'antd';

import styles from './AuthForm.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class AuthForm extends Component {
  handleSignInSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Sign in: Received values of form: ', values);
        const {dispatch} = this.props;
        dispatch({
          type: "user/signIn",
          payload: {
            username: values.username,
            password: values.password
          },
          onSuccess: (username) => message.success('Hello ' + username + ' !'),
          onError: (error) => message.error(error)
        });
      }
    });
  };
  handleSignUpSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        const {dispatch} = this.props;
        dispatch({
          type: "user/signUp",
          payload: {
            username: values.username,
            password: values.password
          },
          onSuccess: (username) => message.success('Hello ' + username + ' !'),
          onError: (error) => message.error(error)
        });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {className} = this.props;
    return (
      <div className={className}>
        <Tabs className={styles.tabs} defaultActiveKey="1">
          <TabPane tab="登录" key="1">
            <Form onSubmit={this.handleSignInSubmit} className={styles.form}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: '请输入用户名!'}],
                })(
                  <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: '请输入密码!'}],
                })(
                  <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                {/*<a className={styles.forgot} href="">忘记密码</a>*/}
                <Button type="primary" htmlType="submit" className={styles.button}>
                  登录
                </Button>
                {/*Or <a href="">register now!</a>*/}
              </FormItem>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form onSubmit={this.handleSignUpSubmit} className={styles.form}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: '请输入用户名!'}],
                })(
                  <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: '请输入密码!'}],
                })(
                  <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>
                )}
              </FormItem>
              <FormItem>
                {/*{getFieldDecorator('remember', {*/}
                {/*valuePropName: 'checked',*/}
                {/*initialValue: true,*/}
                {/*})(*/}
                {/*<Checkbox>记住密码</Checkbox>*/}
                {/*)}*/}
                {/*<a className={styles.forgot} href="">忘记密码</a>*/}
                <Button type="primary" htmlType="submit" className={styles.button}>
                  注册
                </Button>
                {/*Or <a href="">register now!</a>*/}
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>


    );
  }
}

export default connect()(Form.create()(AuthForm));
