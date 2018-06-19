import React, { Component } from 'react';

class ProfileSection extends Component {
  handleRegister = () => {
    console.log('navigate to register');
  };

  handleLogIn = () => {
    console.log('navigate to login');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRegister}>Register</button>
        <button onClick={this.handleLogIn}>Log In</button>
      </div>
    );
  }
}

export default ProfileSection;
