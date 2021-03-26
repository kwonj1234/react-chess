import React, { Component } from 'react'

export default class Bishop extends Component {
  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  }

  /**
   * Returns a bool to see if a destination is reachable from the current square
   * @param {*} src Array of 2 numbers representing the coordinate square. 
   * @param {*} dest Array of 2 numbers representing the coordinae square.
   */
  isMovePossible(src, dest) {
    
    // Bishop's can only move diagonally so the change in the x will always be the same as the 
    // the change in the y.
    return Math.abs(src[0] - dest[0]) === Math.abs(src[1] - dest[1]);

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
