import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.mockCard.img} alt="" />
        <img src={this.props.mockCard.imgGold} alt="" />
      </div>
    );
  }

}

Card.propTypes = {
  // card: PropTypes.object.isRequired,
  mockCard: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default Card;
