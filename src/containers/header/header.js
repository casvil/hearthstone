import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { home } from '../../actions/userActions';

import ProfileSection from './profile-section';

import './header.css';
import logo from '../../logo.svg';

class Header extends Component {
  handleClick = () => {
    this.props.home();
  };
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 onClick={this.handleClick}>React Hearthstone</h2>
        <ProfileSection />
      </div>
    );
  }
}

Header.propTypes = {
  home: PropTypes.func.isRequired,
};

export default connect(
  null,
  { home },
)(Header);
