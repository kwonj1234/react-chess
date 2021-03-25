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

  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  */
  isMovePossible(src, dest) {

    // Knight is tricky in that it move in a L shape. 2 squares along one axis and then 1 square
    // along the opposite axis
    return (Math.abs(src[0] - dest[0]) === 2 && Math.abs(src[1] - dest[1]) === 1) ||
           (Math.abs(src[1] - dest[1]) === 2 && Math.abs(src[0] - dest[0]) === 1)

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
