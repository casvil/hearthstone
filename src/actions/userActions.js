import { push } from 'connected-react-router';

import { USER_SET_HERO, USER_SET_USERNAME } from './types';

export const login = (/* username, password, token */) => (dispatch) => {
  /* do something before redirection */
  dispatch(push('/login'));
};

export const register = (/* formData */) => (dispatch) => {
  /* do something before redirection */
  dispatch(push('/register'));
};

export const setUserDetailsHero = hero => (dispatch) => {
  dispatch({
    type: USER_SET_HERO,
    payload: hero,
  });
};

export const setUserDetailsUsername = username => (dispatch) => {
  dispatch({
    type: USER_SET_USERNAME,
    payload: username,
  });
};
