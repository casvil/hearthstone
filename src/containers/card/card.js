import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUserDetailsHero } from '../../actions/userActions';
import Card from '../../components/card/card';

class CardContainer extends Component {
  onClick() {
    this.props.setUserDetailsHero(this.props.card);
  }

  render() {
    return <Card onClick={() => this.onClick.bind(this)} card={this.props.card} />;
  }
}

CardContainer.propTypes = {
  card: PropTypes.object.isRequired,
  setUserDetailsHero: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cardReducer.cards,
});

export default connect(
  mapStateToProps,
  { setUserDetailsHero },
)(CardContainer);
