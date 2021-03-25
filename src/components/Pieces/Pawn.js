import React, { Component } from 'react'

/**
 * Display the Queen piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class Pawn extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
