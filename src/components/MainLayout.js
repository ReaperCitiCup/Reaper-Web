/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';
import styles from './MainLayout.css';
import PageFoot from '../components/PageFoot';
import Nav from '../components/Navigator';
// import Breadcrumb from '../components/Breadcrumb';
// import Content from '../components/Content';

class MainLayout extends Component {
  render() {
    const {children} = this.props;
    return(
      <div className={styles.baseBody}>
        <div className={styles.normal}>

          <Nav/>
          <div className={styles.mainDiv}>
            {children}
          </div>
        </div>

        <PageFoot/>
      </div>
    )
  }
}

MainLayout.propTypes = {};

export default MainLayout;
