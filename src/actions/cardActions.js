import { FETCH_CARDS_INITIATE, FETCH_CARDS_COMPLETE, FETCH_CARDS_ERROR } from './types';
// import json from '../mock/cards.json';

const { REACT_APP_API_KEY } = process.env;

export const fetchCards = () => (dispatch) => {
  dispatch({
    type: FETCH_CARDS_INITIATE,
  });
  fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=esES', {
    type: 'POST',
    headers: { 'X-Mashape-Key': REACT_APP_API_KEY },
  })
    .then(res => res.json())
    .then(cardSet =>
      dispatch({
        type: FETCH_CARDS_COMPLETE,
        payload: cardSet,
      }),
    )
    .catch((err) => {
      dispatch({
        type: FETCH_CARDS_ERROR,
        payload: err,
      });
    });
};
