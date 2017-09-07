/**
 * Created by st on 2017/9/6.
 */
import request from '../utils/request';

export function fetchUnitNetValueData(code) {
  return request(`/api/fund/${code}/unit-net-value`, {
    method: 'GET',
  });
}

export function fetchCumulativeNetValueData(code) {
  return request(`/api/fund/${code}/cumulative-net-value`, {
    method: 'GET',
  });
}

export function fetchCumulativeProfitData(code, month) {
  return request(`/api/fund/${code}/rate?month=${month}`, {
    method: 'GET',
  });
}

export function fetchCurrentAssetData(code) {
  return request(`/api/fund/${code}/current-asset`, {
    method: 'GET',
  });
}
