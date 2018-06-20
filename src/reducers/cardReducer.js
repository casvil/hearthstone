import { FETCH_CARDS_COMPLETE } from '../actions/types';

const initialState = {
  cards: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_COMPLETE:
      return {
        ...state.user,
        cards: action.payload,
      };
    default:
      return state;
  }
}
