import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStartIndex: 0,
      displayData: [],
      disablePrev: true,
      disableNext: false
    };
  }

  onClickNext = () => {
    let { currentStartIndex } = this.state;
    const { itemsPerPage, list } = this.props;

    currentStartIndex = currentStartIndex + itemsPerPage;
    this.setState({ currentStartIndex });

    if (currentStartIndex !== 0) {
      this.setState({ disablePrev: false });
    }
    if (list.length - currentStartIndex <= itemsPerPage) {
      this.setState({ disableNext: true });
    }
  };

  onClickPrevious = () => {
    let { currentStartIndex } = this.state;
    const { itemsPerPage, list } = this.props;
    currentStartIndex = currentStartIndex - itemsPerPage;
    this.setState({ currentStartIndex });
    if (currentStartIndex === 0) {
      this.setState({ disablePrev: true });
    }
    if (list.length - currentStartIndex > itemsPerPage) {
      this.setState({ disableNext: false });
    }
  };

  render() {
    const { list, itemsPerPage } = this.props;
    //const numberOfTabs = Math.ceil(list.length / itemsPerPage);
    const { disablePrev, disableNext, currentStartIndex } = this.state;
    const displayData = list.slice(
      currentStartIndex,
      itemsPerPage + currentStartIndex
    );

    return (
      <div style={this.props.style}>
        <h3 style={this.props.headerStyle}>{this.props.header}</h3>
        <div style={this.props.contentStyle}>{this.props.render(displayData)}</div>
        <button onClick={this.onClickPrevious} disabled={disablePrev}>
          Previous Page
        </button>
        <button onClick={this.onClickNext} disabled={disableNext}>
          Next Page
        </button>
      </div>
    );
  }
}
