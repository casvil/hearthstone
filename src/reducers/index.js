import { combineReducers } from 'redux';

import cardReducer from './cardReducer';
import userReducer from './userReducer';

export default combineReducers({
  cardReducer,
  userReducer,
});
