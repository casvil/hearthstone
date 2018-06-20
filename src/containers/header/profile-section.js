import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register, login } from '../../actions/userActions';

class ProfileSection extends Component {
  handleRegister = () => {
    this.props.register();
  };

  handleLogIn = () => {
    this.props.login();
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

ProfileSection.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(
  null,
  { register, login },
)(ProfileSection);
