
import request from '../utils/request';

export function fetchFundBrief(code) {
  return request(`/api/fund/${code}/name`, {
    method: 'GET',
  });
}

export function fetchFund(code) {
  return request(`/api/fund/${code}`, {
    method: 'GET',
  });
}
