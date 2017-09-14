
import request from '../utils/request';

export function fetchCombination() {
  return request(`/api/combination`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  });
}

export function createCombination(combination) {
  return request(`/api/combination`, {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(combination),
    })
}

export function deleteCombination(combinationId) {
  return request(`/api/combination/${combinationId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  })
}

export function backtestCombination(combinationId, baseIndex, startDate, endDate) {
  return request(`/api/combination/${combinationId}/backtest?startDate=${startDate}&endDate=${endDate}&baseIndex=${baseIndex}`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  })
}
