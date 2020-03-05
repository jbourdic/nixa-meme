import { SubmissionError } from 'redux-form';
import { fetch } from '../../utils/dataAccess';

export function error(error) {
  return { type: 'USER_LOGIN_ERROR', error };
}

export function loading(loading) {
  return { type: 'USER_LOGIN_LOADING', loading };
}

export function success(loggedin) {
  return { type: 'USER_LOGIN_SUCCESS', loggedin };
}

export function login(values) {
  return dispatch => {
    dispatch(loading(true));

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return fetch('login_check', { method: 'POST', body: JSON.stringify(values), headers: headers })
      .then(response => {
        dispatch(loading(false));

        return response.json();
      })
      .then(retrieved => dispatch(success(retrieved)))
      .catch(e => {
        dispatch(loading(false));

        if (e instanceof SubmissionError) {
          dispatch(error(e.errors._error));
          throw e;
        }

        dispatch(error(e.message));
      });
  };
}

export function reset() {
  return dispatch => {
    dispatch(loading(false));
    dispatch(error(null));
  };
}
