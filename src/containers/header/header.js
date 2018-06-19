import React, { Component } from 'react';

import ProfileSection from './profile-section';
import './header.css';
import logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Hearthstone</h2>
        <ProfileSection />
      </div>
    );
  }
}

export default Header;
