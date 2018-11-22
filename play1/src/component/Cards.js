import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  renderCards = () => {
    const { numberOfCards = 0, style } = this.props;
    /* let cardsArr = new Array(numberOfCards).fill(1);
    console.log(`Number of cards in Cards are ${numberOfCards} in ${cardsArr}`);
    let returnItem = cardsArr.map((item, index) => <Card key={index} style={style} />);
    return returnItem;  */
   let cardsArr = [];
    for(let i = 0;i<numberOfCards;i++){
      cardsArr.push(<Card key={i} style={style} cardIndex={i}/>)
    }
    return cardsArr; 

  };

  render() {
    return this.renderCards();
  }
}
