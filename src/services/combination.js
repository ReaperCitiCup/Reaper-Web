
import request from '../utils/request';

export function fetchCombination() {
  return request(`/api/combination`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  });
}

