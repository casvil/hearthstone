import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';

import { store, routerReducer } from './store';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// set up .env variables
require('dotenv').config();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={routerReducer}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

registerServiceWorker();
