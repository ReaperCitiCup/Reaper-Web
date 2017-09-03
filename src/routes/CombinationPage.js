/**
 * Created by st on 2017/9/2.
 */
import React from 'react';
import {connect} from 'dva';
import MainLayout from "../components/Layout/MainLayout";
import BreadcrumbSearch from "../components/Util/BreadcrumbSearch";

function CombinationPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <BreadcrumbSearch/>
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
