import { USER_SET_HERO, USER_SET_USERNAME } from '../actions/types';

const initialState = {
  username: '',
  hero: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_SET_HERO:
      return {
        ...state,
        hero: action.payload,
      };
    case USER_SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}
