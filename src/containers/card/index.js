import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card';

class CardContainer extends Component {

  render() {
    console.log(this.props);
    return (
      <Card mockCard={this.props.mockCard} type='card' cardSet={this.props.cardSet}></Card>
    );
  }

}

CardContainer.propTypes = {
  // card: PropTypes.object.isRequired,
  mockCard: PropTypes.object,
};

export default CardContainer;
