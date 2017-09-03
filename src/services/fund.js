
import request from '../utils/request';


export function fetchFund(code) {
  return request(`/api/fund/${code}`, {
    method: 'GET',
  });
}
