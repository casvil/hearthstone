import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import combineReducers from './reducers/index';

const initialState = {};
const routerReducer = createBrowserHistory();
const middleware = [thunk, routerMiddleware(routerReducer)];

const store = createStore(
  connectRouter(routerReducer)(combineReducers), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.navigator.userAgent.includes('Chrome')
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose,
  ),
);

export default store;
