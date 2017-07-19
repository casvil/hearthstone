import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './containers/card/';
import unirest from 'unirest';
// mock data
const mockCard = require('./mock/single-card-response');

class App extends Component {

  componentDidMount() {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
    .header("X-Mashape-Key", "GmSwaTQi8VmshabahQuB1zaqxcF4p1DB8CpjsnCHEXjhNhtpaI")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  }
  render() {
    console.log(mockCard);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Hearthstone</h2>
        </div>
        <Card mockCard={mockCard[0]} cardSet={mockCard[0].cardSet}></Card>
      </div>
    );
  }
}

export default App;
