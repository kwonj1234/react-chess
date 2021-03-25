import React, { Component } from 'react'

/**
 * Display the Queen piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class Knight extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
