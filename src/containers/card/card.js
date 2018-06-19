import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  cards: state.cardReducer.cards,
});

export default connect(mapStateToProps)(CardContainer);
