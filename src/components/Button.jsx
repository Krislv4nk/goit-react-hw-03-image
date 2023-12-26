import React, { Component } from "react";


export class LoadMoreButton extends Component {
  render() {
    const { onClick, isVisible } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <button onClick={onClick}>Load more</button>
    );
  }
}