// import external packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import internal functions, such as Redux actions
import { fetchCards } from './actions/cardActions';

// import components and containers
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import HeroList from './containers/hero-list/hero-list';

// import media
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
        <Footer />
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
