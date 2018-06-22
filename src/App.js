// import external packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';

// import internal functions, such as Redux actions
import { fetchCards } from './actions/cardActions';

// import components and containers
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import HeroList from './containers/hero-list/hero-list';
import Register from './containers/register/register';

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
      <Switch>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/login" component={HeroList} />
          <Route exact path="/register" component={Register} />
          <Route path="/" component={Footer} />
        </div>
      </Switch>
    );
  }
}

App.propTypes = {
  fetchCards: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    null,
    { fetchCards },
  )(App),
);
