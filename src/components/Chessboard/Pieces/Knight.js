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
   * Returns a bool to see if a destination is reachable from the current square.
   * @param {Array} src Array of 2 numbers representing the coordinate square. 
   * @param {Array} dest Array of 2 numbers representing the coordinae square.
   * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
   * on the board
   */
  isMovePossible(src, dest, currentPositions) {

    // Figure out color of the piece we are looking at
    const isWhite = currentPositions[src[0]][src[1]].isWhite;

    // Knight is tricky in that it move in a L shape. 2 squares along one axis and then 1 square
    // along the opposite axis
    if ((Math.abs(src[0] - dest[0]) === 2 && Math.abs(src[1] - dest[1]) === 1) ||
      (Math.abs(src[1] - dest[1]) === 2 && Math.abs(src[0] - dest[0]) === 1)) {

      // Check the destination square. If it is the same color as the current piece, we cannot have 
      // two pieces of the same color occupying the same square, return false. If it's an opposing
      // piece or empty square return true.
      if (!currentPositions[dest[0]][dest[1]] || currentPositions[dest[0]][dest[1]].isWhite !== isWhite) {

        return true;

      }

    }

    // If the code reaches this point, the knight cannot move to the destination square, return false
    return false; 

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
    if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]+1], currentPositions).isAvailable) possibleMoves.push([src[0]-2, src[1]+1]);
    if (canPieceGoToDest(this.isWhite, [src[0]-2, src[1]-1], currentPositions).isAvailable) possibleMoves.push([src[0]-2, src[1]-1]);
    // Check if the squares to the right of the current square are available
    if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]+2], currentPositions).isAvailable) possibleMoves.push([src[0]-1, src[1]+2]);
    if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]+2], currentPositions).isAvailable) possibleMoves.push([src[0]+1, src[1]+2]);
    // Check if the squares below the current squares are available
    if (canPieceGoToDest(this.isWhite, [src[0]+2, src[1]+1], currentPositions).isAvailable) possibleMoves.push([src[0]+2, src[1]+1]);
    if (canPieceGoToDest(this.isWhite, [src[0]+2, src[1]-1], currentPositions).isAvailable) possibleMoves.push([src[0]+2, src[1]-1]);
    // Check if the squares to the left of the current square are available
    if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]-2], currentPositions).isAvailable) possibleMoves.push([src[0]-1, src[1]-2]);
    if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]-2], currentPositions).isAvailable) possibleMoves.push([src[0]+1, src[1]-2]);

    return possibleMoves;

  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
