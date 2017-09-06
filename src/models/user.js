import * as userService from '../services/user';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'user',
  state: {
    user: null
  },
  reducers: {
    saveUser(state, {payload: user}) {
      return {...state, user};
    },
  },
  effects: {
    *fetchUser(action, {call, put, select}) {
      const {data} = yield call(userService.currentUser);
      yield put({
        type: 'saveUser',
        payload: data,
      });
    },

    *signUp({payload: user, onSuccess, onError}, {call, put}) {
      const {data: signUpData} = yield call(userService.signUp, user);
      console.log(signUpData);

      if (!signUpData.result) {
        onError(signUpData.message);
        return;
      }

      const {data} = yield call(userService.signIn, user);
      console.log(data);

      if (data.result !== undefined) {
        localStorage.setItem('token', data.result);
        yield put({
          type: 'fetchUser'
        });
        onSuccess(user.username);

      } else {
        onError(data.message.split(': ')[1]);
      }
    },

    *refreshUser(action, {put, select}) {
      const {user} = yield select(state => state.user);
      const token = localStorage.getItem('token');

      if (token !== null && user === null) {
        yield put({
          type: 'fetchUser',
        });
      }

    },

    *signIn({payload: user, onSuccess, onError}, {call, put}) {
      const {data} = yield call(userService.signIn, user);

      if (data.result !== undefined) {
        localStorage.setItem('token', data.result);
        yield put({
          type: 'fetchUser'
        });
        yield put(routerRedux.push('/account'));
        onSuccess(user.username);

      } else {
        onError(data.message.split(': ')[1]);
      }
    },
    *signOut({onSuccess}, {call, put}) {
      yield call(userService.signOut);
      //onComplete();
      yield put({
        type: 'saveUser',
        payload: null,
      });
      onSuccess();
      yield put(routerRedux.push('/auth'));
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        dispatch({
          type: 'refreshUser',
        });
      });
    }
  },
};