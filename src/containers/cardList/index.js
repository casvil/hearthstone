import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card';

class CardListContainer extends Component {
  render() {
    return (
      <Card card={this.props.card} />
    );
  }

}

CardListContainer.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardListContainer;
