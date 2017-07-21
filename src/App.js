import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './containers/card/';
// mock data
// const mockCard = require('./mock/single-card-response');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: undefined,
    };
  }

  componentWillMount() {
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',
      { headers:
        { 'X-Mashape-Key': 'GmSwaTQi8VmshabahQuB1zaqxcF4p1DB8CpjsnCHEXjhNhtpaI' },
      })
      .then((response) => {
        // If request is good...
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  render() {
    if (!this.state.cards) {
      return (<p>Loading ... </p>);
    }
    console.log(this.state.cards.Naxxramas[0]);
    console.log(this.state.cards.Basic[10]);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Hearthstone</h2>
        </div>
        <Card card={this.state.cards.Naxxramas[0]} />
      </div>
    );
  }
}

export default App;
