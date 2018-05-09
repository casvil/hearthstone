import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './containers/card/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: undefined
    };
  }

  componentWillMount() {
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',
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
          <h1>Naxxramas Card List</h1>
          {Object.keys(this.state.items).forEach(item => console.log(item))}
          {this.state.items.Naxxramas.map(card => <Card card={card} />)}
        </div>
      </div>
    );
  }
}

export default App;
