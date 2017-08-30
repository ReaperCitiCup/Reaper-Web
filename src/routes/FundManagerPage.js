/**
 * Created by st on 2017/8/25.
 */
import React from 'react';
import {connect} from 'dva';
import MainLayout from "../components/Layout/MainLayout";
import FundManagerHeader from "../components/FundManager/FundManagerHeader";


function FundManagerPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundManagerHeader/>
      </MainLayout>
    </div>
  )
}

FundManagerPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(FundManagerPage);
