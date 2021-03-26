import React, { Component } from 'react'

export default class King extends Component {
  /**
   * Display the King piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
  
  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  */
  isMovePossible(src, dest) {
  
    // King can move in any direction but only 1 square. The difference in the x and y should be 
    // 0 or 1.
    return (Math.abs(src[0] - dest[0]) === 0 || Math.abs(src[0] - dest[0]) === 1) &&
           (Math.abs(src[1] - dest[1]) === 0 || Math.abs(src[1] - dest[1]) === 1)  

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
