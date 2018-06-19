import { FETCH_CARDS } from './types';

import json from '../mock/cards.json';

// axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=esES',
//   { headers:
//     { 'X-Mashape-Key': 'GmSwaTQi8VmshabahQuB1zaqxcF4p1DB8CpjsnCHEXjhNhtpaI' },
//   })
//   .then((response) => {
//     this.setState({
//       isLoaded: true,
//       sets: response.data,
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export const fetchCards = () => dispatch =>
  // mocked data
  dispatch({
    type: FETCH_CARDS,
    payload: json,
  });
