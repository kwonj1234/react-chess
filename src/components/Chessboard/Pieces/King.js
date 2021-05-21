import React, { Component } from 'react'
import { Rook } from '.';
import { canPieceGoToDest } from './utils';

export default class King extends Component {
  /**
   * Display the King piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? './../../chessPiecesImages/WhiteKing.svg' : './../../chessPiecesImages/BlackKing.svg';
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
    this.hasMoved = false;
    // King has no value, or relatively, it has the most value because once it is captured, it is game over
    this.value = null;
  }
  
  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  * @param {*} currentPositions 2D matrix containing the current positions on the board, used for 
  * when the king attemps to castle.
  */
  isMovePossible(src, dest, currentPositions=[]) {
  
    // King can move in any direction but only 1 square. The difference in the x and y should be 
    // 0 or 1.
    // TODO: Implement castling
    return (Math.abs(src[0] - dest[0]) === 0 || Math.abs(src[0] - dest[0]) === 1) &&
           (Math.abs(src[1] - dest[1]) === 0 || Math.abs(src[1] - dest[1]) === 1)  

  }


  /**
   * Returns an array of all possible moves for the king on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the bishop is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {
    // Initialize array for possible moves
    let possibleMoves = [];

    // King can move in any direction but only one square
    // Check all squares above the king
    if (src[0] - 1 > 0) {

      // top left
      if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]-1], currentPositions)) possibleMoves.push([src[0]-1, src[1]-1]);
      // directly above
      if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]], currentPositions)) possibleMoves.push([src[0]-1, src[1]]);
      // top right
      if (canPieceGoToDest(this.isWhite, [src[0]-1, src[1]+1], currentPositions)) possibleMoves.push([src[0]-1, src[1]+1]);

    }
    // Check all squares below the king
    if (src[0] + 1 < 8) {

      // bottom left
      if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]-1], currentPositions)) possibleMoves.push([src[0]+1, src[1]-1]);
      // directly below
      if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]], currentPositions)) possibleMoves.push([src[0]+1, src[1]]);
      // bottom right
      if (canPieceGoToDest(this.isWhite, [src[0]+1, src[1]+1], currentPositions)) possibleMoves.push([src[0]+1, src[1]+1]);

    }
    // Check squares to the left and right 
    if (canPieceGoToDest(this.isWhite, [src[0], src[1]-1], currentPositions)) possibleMoves.push([src[0], src[1]-1]);
    if (canPieceGoToDest(this.isWhite, [src[0], src[1]+1], currentPositions)) possibleMoves.push([src[0], src[1]+1]);

    // Check for possibilites of castling
    // Castling can only occur if the king and the target rook have not moved and if all squares 
    // between them are empty
    if (!this.hasMoved) {

      // Check queen side castling
      // Check that squares between rook and king are empty
      if (!currentPositions[src[0]][src[1]-1] && !currentPositions[src[0]][src[1]-2] && !currentPositions[src[0]][src[1]-3]
        // Check that there is a rook at the end square and has not moved
        && currentPositions[src[0]][src[1]-4] && currentPositions[src[0]][src[1]-4].constructor.name === Rook && !currentPositions[src[0]][src[1]-4].hasMoved) {

          possibleMoves.push([src[0], src[1]-2, "castle"])

      }
      // Check king side castling
      // Check that squares between rook and king are empty
      if (!currentPositions[src[0]][src[1]+1] && !currentPositions[src[0]][src[1]+2]
        // Check that there is a rook at the end square and has not moved
        && currentPositions[src[0]][src[1]+3] && currentPositions[src[0]][src[1]+3].constructor.name === Rook && !currentPositions[src[0]][src[1]+3].hasMoved) {

          possibleMoves.push([src[0], src[1]+2, "castle"])

      }
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
