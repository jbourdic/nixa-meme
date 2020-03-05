import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'USER_LOGIN_ERROR':
      return action.error;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'USER_LOGIN_LOADING':
      return action.loading;

    default:
      return state;
  }
}

export function loggedin(state = null, action) {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return action.loggedin;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, loggedin });
