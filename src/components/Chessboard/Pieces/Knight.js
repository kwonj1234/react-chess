import React, { Component } from 'react';
import { canPieceGoToDest } from './utils';

export default class Knight extends Component {
  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? "./../../../../public/chessPiecesImages/WhiteKnight.svg" : "./../../../../public/chessPiecesImages/BlackKnight.svg";
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
    this.value = 3;
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

  /**
   * Returns an array of all possible moves for the knight on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the bishop is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {
    // Initialize array for possible moves
    let possibleMoves = [];

    // Knight can only move in L shapes
    // Check if the squares above the current square are available
    if (src[0] - 2 > 2) {
      if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]+1], currentPositions)) possibleMoves.push([src[0]-2, src[1]+1]);
      if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]-1], currentPositions)) possibleMoves.push([src[0]-2, src[1]-1]);
    } 
    // Check if the squares to the right of the current square are available
    if (src[1] + 2 < 8) {
      if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]+2], currentPositions)) possibleMoves.push([src[0]-1, src[1]+2]);
      if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]+2], currentPositions)) possibleMoves.push([src[0]+1, src[1]+2]);
    }
    // Check if the squares below the current squares are available
    if (src[0] + 2 < 8) {
      if (canPieceGoToDest(this.isWhite, [src[0]+2, src[1]+1], currentPositions)) possibleMoves.push([src[0]+2, src[1]+1]);
      if (canPieceGoToDest(this.isWhite, [src[0]+2, src[1]-1], currentPositions)) possibleMoves.push([src[0]+2, src[1]-1]);
    }
    // Check if the squares to the left of the current square are available
    if (src[0] + 2 < 8) {
      if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]+1], currentPositions)) possibleMoves.push([src[0]-2, src[1]+1]);
      if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]-1], currentPositions)) possibleMoves.push([src[0]-2, src[1]-1]);
    }

    return possibleMoves;

  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
