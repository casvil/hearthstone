import React, { Component } from 'react';
import axios from 'axios';

import Card from './containers/card/';
import logo from './logo.svg';
import './App.css';

// import json from './mock/cards.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: undefined
      // items: json
    };

    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=esES',
      { headers:
        { 'X-Mashape-Key': 'GmSwaTQi8VmshabahQuB1zaqxcF4p1DB8CpjsnCHEXjhNhtpaI' },
      })
      .then((response) => {
        this.setState({
          isLoaded: true,
          items: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Hearthstone</h2>
          </div>
          <p>Loading ... </p>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Hearthstone</h2>
        </div>
        <div>
          {/* How to paint ALL cards */}
          {/* {Object.keys(this.state.items).map(item => this.state.items[item].map((card, i) => <Card key={i} card={card} />))} */}
          {/* How to paint an specific collection */}
          {/* {this.state.items.Naxxramas.map((card, i) => <Card key={i} card={card} />)} */}
        </div>
      </div>
    );
  }
}

export default App;
