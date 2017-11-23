/**
 * Created by wyj on 2017/9/4.
 */
import React from 'react';
import {connect} from 'dva';

import AssetAllocation from '../components/Asset/AssetAllocation';
import MainLayout from '../components/Layout/MainLayout';
import Loading from '../components/Util/Loading';

function AssetAllocationPage({loading}) {
  return (
    <div className="baseBody">
      <MainLayout>
        <div className="container">
          {loading ? <Loading/> : <AssetAllocation /> }
        </div>
      </MainLayout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.effects['asset/createCombination']
  };
}


export default connect(mapStateToProps)(AssetAllocationPage);
