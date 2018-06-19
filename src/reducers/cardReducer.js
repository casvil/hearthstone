import { FETCH_CARDS } from '../actions/types';

const initialState = {
  cards: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state.user,
        cards: action.payload,
      };
    default:
      return state;
  }
}
