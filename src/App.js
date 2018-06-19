import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCards } from './actions/cardActions';

import Header from './containers/header/header';
import HeroList from './containers/hero-list/hero-list';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // fetch cardSet
    this.props.fetchCards();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <HeroList />
      </div>
    );
  }
}

App.propTypes = {
  fetchCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cardReducer.cards,
});

export default connect(
  mapStateToProps,
  { fetchCards },
)(App);
