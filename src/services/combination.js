
import request from '../utils/request';

export function fetchCombination() {
  return request(`/api/combination`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  });
}

export function deleteCombination(combinationId) {
  return request(`/api/combination/${combinationId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  })
}

export function combinationBacktest(combinationId, baseIndex, startDate, endDate) {
  return request(`/api/combination/${combinationId}/backtest`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    body: {
      "baseIndex": baseIndex,	//szzz, sz180, sz50, hs300, zz500
      "startDate": startDate,
      "endDate": endDate,
    }
  })
}
