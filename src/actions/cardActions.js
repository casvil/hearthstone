import { FETCH_CARDS } from './types';
// import json from '../mock/cards.json';

const { REACT_APP_API_KEY } = process.env;

export const fetchCards = () => (dispatch) => {
  fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=esES', {
    type: 'POST',
    headers: { 'X-Mashape-Key': REACT_APP_API_KEY },
  })
    .then(res => res.json())
    .then(cardSet =>
      dispatch({
        type: FETCH_CARDS,
        payload: cardSet,
      }),
    )
    .catch((error) => {
      // do something -> dispatch action error request
      console.warn(error);
    });
};
