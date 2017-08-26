/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './Breadcrumb.css';
import {Breadcrumb} from 'antd';

class MyBreadcrumb extends Component {
  render() {
    const {items} = this.props
    return (
      <div className="container">
        <div className={styles.breadcrumbBody}>
          <Breadcrumb separator=">">
            {items.map(item =>
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            )}
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

MyBreadcrumb.propTypes = {};

export default MyBreadcrumb;
