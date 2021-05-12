import React, { Component } from 'react'
import { possibleSquaresDiagonal, isDiagonalMovePossible } from './utils';

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
   * @param {Array} src Array of 2 numbers representing the coordinate square. 
   * @param {Array} dest Array of 2 numbers representing the coordinae square.
   * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
   * on the board
   */
  isMovePossible(src, dest, currentPositions) {
    
    // Bishop can only move diagonally so we only have to do the logic for the diagonal squares
    return isDiagonalMovePossible(src, dest, currentPositions)
    
  }

  /**
   * Returns an array of all possible moves for the bishop on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the bishop is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {

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
