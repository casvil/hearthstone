import { SET_USER_DETAILS_HERO, SET_USER_DETAILS_USERNAME } from './types';

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
