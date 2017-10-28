import * as userService from '../services/user';
import {routerRedux} from 'dva/router';

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
    * fetchUser({onSuccess}, {call, put, select}) {
      const {data} = yield call(userService.currentUser);
      yield put({
        type: 'saveUser',
        payload: data,
      });

      if (data && onSuccess) {
        onSuccess();
      }
    },

    * signUp({payload: user, onSuccess, onError}, {call, put}) {
      const {data: signUpData} = yield call(userService.signUp, user);
      // console.log(signUpData);

      if (signUpData !== undefined && !signUpData.result) {
        onError(signUpData.message);
        return;
      }

      const {data} = yield call(userService.signIn, user);
      // console.log(data);

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

    * refreshUser({onSuccess}, {put, select}) {
      const {user} = yield select(state => state.user);
      const token = localStorage.getItem('token');

      if (token && !user) {
        yield put({
          type: 'fetchUser',
          onSuccess,
        });
      }

    },

    * signIn({payload: user, onSuccess, onError}, {call, put}) {
      const {data} = yield call(userService.signIn, user);

      console.log(data)

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
    * signOut({onSuccess}, {call, put}) {
      yield call(userService.signOut);
      //onComplete();
      yield put({
        type: 'saveUser',
        payload: null,
      });
      onSuccess();
      yield put(routerRedux.push('/auth'));
    },

    * editPassword({payload: password, onSuccess, onError}, {call, put, select}) {

      const {user} = yield select(state => state.user);

      if (!user) return;

      const body = {
        // id: user.id,
        oldPassword: password.old,
        password: password.password
      }

      const {data} = yield call(userService.editPassword, body)

      console.log(data);
    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/combination') {
          dispatch({
            type: 'refreshUser',
            onSuccess: () => dispatch({
              type: 'combination/fetchCombinations',
            })
          });
        } else {
          dispatch({
            type: 'refreshUser',
          });
        }

      });
    }
  },
};
