import React, { Component } from 'react'

export default class Rook extends Component {
  /**
   * Display the Rook piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }

  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  */
  isMovePossible(src, dest) {

    // Rook can only move in one direction, if x changes, the y stays the same and vice versa
    return (src[0] !== dest[0] && src[1] === dest[1]) ||
           (src[1] !== dest[1] && src[0] === dest[0]) 

  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
