
import request from '../utils/request';


export function search(keyword, order = 'name', size = 10, page = 1) {
  return request(`/api/fund/search?keyword=${keyword}&order=${order}&size=${size}&page=${page}`, {
    method: 'GET',
  });
}
