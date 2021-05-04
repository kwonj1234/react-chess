import React, { Component } from 'react'
import { possibleSquaresDiagonal } from './utils';

export default class Bishop extends Component {
  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? './../../../../public/chessPiecesImages/WhiteBishop.svg' : './../../../../public/chessPiecesImages/BlackBishop.svg';
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
    this.value = 3;
  }

  /**
   * Returns a bool to see if a destination is reachable from the current square.
   * @param {*} src Array of 2 numbers representing the coordinate square. 
   * @param {*} dest Array of 2 numbers representing the coordinae square.
   */
  isMovePossible(src, dest) {
    
    // Bishop's can only move diagonally so the change in the x will always be the same as the 
    // the change in the y.
    return Math.abs(src[0] - dest[0]) === Math.abs(src[1] - dest[1]);

  }

  /**
   * Returns an array of all possible moves for the bishop on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the bishop is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {
    console.log('possible moves')
    // Bishop can only move diagonally so we only have to do the logic for the diagonal squares
    return possibleSquaresDiagonal(src, currentPositions);

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
