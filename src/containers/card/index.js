import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card';

class CardContainer extends Component {

  // this component needs to be smarter

  render() {
    return (
      <Card card={this.props.card} />
    );
  }

}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardContainer;
