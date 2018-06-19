import { FETCH_CARDS } from '../actions/types';

const initialState = {
  username: '',
  hero: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        sets: action.payload,
      };
    default:
      return state;
  }
}
