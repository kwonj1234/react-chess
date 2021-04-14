import React, { Component } from 'react'

export default class Queen extends Component {
  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    this.image = isWhite ? "./../../../../public/chessPiecesImages/WhiteQueen.svg" : "./../../../../public/chessPiecesImages/BlackQueen.svg";
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
  
  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  */
  isMovePossible(src, dest) {

    // Queen can move diagonally like the bishop or horizontally like the rook
    // Condition for Bishop
    if (Math.abs(src[0] - dest[0]) === Math.abs(src[1] - dest[1])) {
      return true;
    // Condition for Rook
    } else if ((src[0] !== dest[0] && src[1] === dest[1]) || (src[1] !== dest[1] && src[0] === dest[0])) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
