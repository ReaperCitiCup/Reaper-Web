/**
 * Created by st on 2017/8/23.
 */
import React, {Component} from 'react';

import styles from './MainLayout.css';
import Footer from './Footer';
import Nav from './Navigator';
// import Breadcrumb from '../components/Breadcrumb';
// import Content from '../components/Content';

function MainLayout({children}) {

  return (
    <div >
      <div className="container">
        <Nav/>
      </div>

      <div className={styles.mainDiv}>
        {children}
      </div>

      <Footer/>
    </div>
  )
}

export default MainLayout;
