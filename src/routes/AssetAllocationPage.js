/**
 * Created by wyj on 2017/9/4.
 */
import React from 'react';
import AssetAllocation from '../components/Asset/AssetAllocation';
import MainLayout from '../components/Layout/MainLayout';

function AssetAllocationPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <div className="container">
          <AssetAllocation />
        </div>
      </MainLayout>
    </div>
  );
}

export default AssetAllocationPage;
