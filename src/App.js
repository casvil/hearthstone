import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCards } from './actions/cardActions';

import Card from './containers/card/card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // fetch cardSet
    this.props.fetchCards();

    // isLoaded is set to false when the HS API is used and sets property is uncommented
    this.state = {
      error: false,
      isLoaded: true,
    };
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
        <div className="heroes">
          {Object.keys(this.props.cards).map(nameSet =>
            this.props.cards[nameSet]
              .filter(set => set.type === 'Hero' && set.cardSet === 'Basic')
              .map((card, i) => <Card key={i} card={card} />),
          )}
        </div>
        <div>
          {/* How to paint ALL cards */}
          {/*
            {Object.keys(this.props.cards)
              .map(item => this.props.cards[item].map((card, i) => <Card key={i} card={card} />))}
            */}
          {/* How to paint an specific collection */}
          {/* {this.props.cards.Naxxramas.map((card, i) => <Card key={i} card={card} />)} */}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchCards: PropTypes.func.isRequired,
  cards: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cardReducer.cards,
});

export default connect(
  mapStateToProps,
  { fetchCards },
)(App);
