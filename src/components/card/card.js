import React, { Component } from 'react';

class Card extends Component {

  render() {
    if (this.props.card.img) {
      return (
        <div>
          <img onClick={this.props.onClick(this.props.card)} src={this.props.card.img} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.props.card.name}</h1>
        </div>
      );
    }
  }
}

export default Card;
