/**
 * Created by st on 2017/9/6.
 */
import request from '../utils/request';

export function fetchFundChartData(code) {
  return request(`/api/fund/${code}/unit-net-value`, {
    method: 'GET',
  });
}
