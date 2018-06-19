import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/card/card';

class CardContainer extends Component {
  onClick() {
    alert(`${this.props.card.name} selected!`);
  }

  render() {
    return <Card onClick={() => this.onClick.bind(this)} card={this.props.card} />;
  }
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardContainer;
