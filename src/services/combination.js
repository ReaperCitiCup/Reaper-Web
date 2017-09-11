
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
