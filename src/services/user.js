/**
 * Created by Sorumi on 17/9/3.
 */
import request, {requestWithoutError} from '../utils/request';


export function currentUser() {
  return request(`/api/user`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
  });
}

export function signUp(user) {
  return request(`/api/user/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });
}

export function signIn(user) {
  return requestWithoutError(`/api/user/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });
}

export function signOut() {
  localStorage.removeItem('token');
  // return request(`/api/user/signout`, {
  //     method: 'POST',
  // });
}

export function editPassword(user) {
  console.log(user)
  return requestWithoutError(`/api/user/password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });
}
