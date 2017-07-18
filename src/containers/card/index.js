import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card';
// mock data
const mockCard = require('../../mock/single-card-response');

class CardContainer extends Component {

  render() {
    return (
      <Card card={mockCard[0]}></Card>
    );
  }

}

CardContainer.propTypes = {

};

export default CardContainer;
