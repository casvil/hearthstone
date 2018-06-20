import { push } from 'connected-react-router';

import { SET_USER_DETAILS_HERO, SET_USER_DETAILS_USERNAME } from './types';

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
    type: SET_USER_DETAILS_HERO,
    payload: hero,
  });
};

export const setUserDetailsUsername = username => (dispatch) => {
  dispatch({
    type: SET_USER_DETAILS_USERNAME,
    payload: username,
  });
};
