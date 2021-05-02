import React, { Component } from 'react'
import { possibleSquaresStraightLine } from './utils';

export default class Rook extends Component {
  /**
   * Display the Rook piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? './../../../../public/chessPiecesImages/WhiteRook.svg' : './../../../../public/chessPiecesImages/BlackRook.svg'
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
    this.hasMoved = false;
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

  /**
   * Returns an array of all possible moves for the rook on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the Rook is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {
    console.log('possible moves')
    // Rook can only move in straight lines so we only have to do the logic for the horizontal
    // and vertical squares
    return possibleSquaresStraightLine(src, currentPositions);

  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
