import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    return (
      <div>
        <img src={this.props.card.img} alt="" />
      </div>
    );
  }
  
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
