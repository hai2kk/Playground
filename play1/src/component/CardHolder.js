import React, { Component } from "react";
import Cards from "./Cards";
import {CardHolderClass} from "../css/Styles.css";
import PropTypes from "prop-types";

export default class CardHolder extends Component {
  constructor(props) {
    super(props);

    const { initialNumberOfCards = 0 } = this.props;
    this.state = {
      cards: initialNumberOfCards
    };
  }


  static defaultProps = {
    initialNumberOfCards: 6,
  }

  addCard = () => {
    let { cards } = this.state;
    cards = parseInt(cards) + 1;
    this.setState({ cards });
  };

  render() {
    const { addClass, altText = "", addCardImage, cardStyle } = this.props;
    const { cards } = this.state;

    return (
      <React.Fragment>
        <img
          src={addCardImage}
          alt={altText}
          style={addClass}
          onClick={this.addCard}
        />
        <div style={CardHolderClass}>  <Cards numberOfCards={cards} style={cardStyle} /></div>
      </React.Fragment>
    );
  }
}
