/**
 * Created by st on 2017/9/9.
 */
import request from '../utils/request';

export function fetchCompanyId(code) {
  return request(`/api/fund/${code}/company`, {
    method: 'GET',
  });
}

export function fetchCompanyProductStrategy(companyId) {
  return request(`/api/company/${companyId}/product-strategy`, {
    method: 'GET',
  });
}

export function fetchCompanyAssetAllocation(companyId) {
  return request(`/api/company/${companyId}/asset-allocation`, {
    method: 'GET',
  });
}
