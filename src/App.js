import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Card from './containers/card/card';
import logo from './logo.svg';
import './App.css';

import json from './mock/cards.json';

class App extends Component {
  constructor(props) {
    super(props);

    // isLoaded is set to false when the HS API is used and sets property is uncommented
    this.state = {
      error: false,
      isLoaded: true,
      // sets: undefined
      sets: json,
    };

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
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <Provider store={store}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React Hearthstone</h2>
            </div>
            <p>Loading ... </p>
          </div>
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Hearthstone</h2>
          </div>
          <div className="heroes">
            {Object.keys(this.state.sets).map(nameSet =>
              this.state.sets[nameSet]
                .filter(set => set.type === 'Hero' && set.cardSet === 'Basic')
                .map((card, i) => <Card key={i} card={card} />),
            )}
          </div>
          <div>
            {/* How to paint ALL cards */}
            {/*
            {Object.keys(this.state.sets)
              .map(item => this.state.sets[item].map((card, i) => <Card key={i} card={card} />))}
            */}
            {/* How to paint an specific collection */}
            {/* {this.state.sets.Naxxramas.map((card, i) => <Card key={i} card={card} />)} */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
