import React, { Component } from 'react';
import { possibleSquaresDiagonal, possibleSquaresStraightLine } from './utils';
import { isDiagonalMovePossible, isStraightLineMovePossible } from './utils';

export default class Queen extends Component {
  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? "./../../../../public/chessPiecesImages/WhiteQueen.svg" : "./../../../../public/chessPiecesImages/BlackQueen.svg";
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
    this.value = 10;
  }
  
  /**
   * Returns a bool to see if a destination is reachable from the current square.
   * @param {Array} src Array of 2 numbers representing the coordinate square. 
   * @param {Array} dest Array of 2 numbers representing the coordinae square.
   * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
   * on the board
   */
  isMovePossible(src, dest, currentPositions) {

    // Queen can move diagonally like the bishop or horizontally like the rook
    return isDiagonalMovePossible(src, dest, currentPositions) || isStraightLineMovePossible(src, dest, currentPositions);
  }

  /**
   * Returns an array of all possible moves for the queen on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the queen is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {

    // The queen can move diagonally or in straight lines
    return [ ...possibleSquaresDiagonal(src, currentPositions), ...possibleSquaresStraightLine(src, currentPositions) ]

  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
