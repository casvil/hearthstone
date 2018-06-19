import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../card/card';

class HeroList extends Component {
  render() {
    return (
      <div className="heroes">
        {Object.keys(this.props.cards).map(nameSet =>
          this.props.cards[nameSet]
            .filter(set => set.type === 'Hero' && set.cardSet === 'Basic')
            .map((card, i) => <Card key={i} card={card} />),
        )}
        {/* How to paint ALL cards */}
        {/*
        {Object.keys(this.props.cards)
          .map(item => this.props.cards[item].map((card, i) => <Card key={i} card={card} />))}
        */}
        {/* How to paint an specific collection */}
        {/* {this.props.cards.Naxxramas.map((card, i) => <Card key={i} card={card} />)} */}
      </div>
    );
  }
}

HeroList.propTypes = {
  cards: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cardReducer.cards,
});

export default connect(mapStateToProps)(HeroList);
