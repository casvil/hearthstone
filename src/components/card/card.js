import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    if (this.props.card.img) {
      return (
        <div role="button" tabIndex={0} onClick={this.props.onClick(this.props.card)}>
          <img src={this.props.card.img} alt="" />
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.card.name}</h1>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
