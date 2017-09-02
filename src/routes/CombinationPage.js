/**
 * Created by st on 2017/9/2.
 */
import React from 'react';
import {connect} from 'dva';
import MainLayout from "../components/Layout/MainLayout";
import FundHeader from "../components/Util/FundHeader";

function CombinationPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundHeader/>
      </MainLayout>
    </div>
  )
}

CombinationPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(CombinationPage);
