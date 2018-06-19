import { SET_USER_DETAILS_HERO, SET_USER_DETAILS_USERNAME } from '../actions/types';

const initialState = {
  username: '',
  hero: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS_HERO:
      return {
        ...state,
        hero: action.payload,
      };
    case SET_USER_DETAILS_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}
