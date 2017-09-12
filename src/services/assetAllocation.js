/**
 * Created by wyj on 2017/9/10.
 */
import request from '../utils/request';

export function getDataList(data) {
  return request('/api/asset-allocation/target-path', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  });
}

export function createCombination(data) {
  return request('/api/asset-allocation/fund-combination', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  });
}
