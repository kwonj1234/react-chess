import React, { Component } from 'react'

export default class Pawn extends Component {

  /**
   * Display the Queen piece on the board. 
   * @param {*} isWhite bool, true being white and false being black
   */
  constructor(isWhite) {
    super();
    this.isWhite = isWhite;
    // this.image = isWhite ? "./../../../../public/chessPiecesImages/WhitePawn.svg" : "./../../../../public/chessPiecesImages/BlackKnight.svg";
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
    this.hasMoved = false;
    this.value = 1;
  }

  /**
   * Returns a bool to see if a destination is reachable from the current square
   * @param {Array} src Array of 2 numbers representing the coordinate square. 
   * @param {Array} dest Array of 2 numbers representing the coordinae square.
   * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
   * on the board
   * @param {Object} prevMove Object of the previous move. Used to see if en passant is possible.
   */
  isMovePossible(src, dest, currentPositions, prevMove) {

    // Pawns have a lot of variety, if they are at the initial position they have the option of 
    // moving 2 spaces as well as 1, en passant, capturing diagonally

    // Pawns for white will behave opposite to the black pawns relative to the grid
    if (this.isWhite) {
      
      // Pawn marches 1 square foward, make sure there is no piece on that square
      if (src[0] - 1 === dest[0] && src[1] === dest[1] && !currentPositions[dest[0]][dest[1]]) {
        return true;
      // Pawn was at starting square and then goes 2 squares forward
      } else if (!this.hasMoved && src[0] - 2 === dest[0] && src[1] === dest[1]) {

        // make sure the 2 squares in front of the pawn do not have a piece on them.
        for (let i = 1; i < 3; i++) {
          
          if (currentPositions[src[0] - i][src[1]]) {
            return false;
          }
        }

        return true;

      // Capturing
      } else if (currentPositions[dest[0]][dest[1]] && currentPositions[dest[0]][dest[1]].isWhite !== this.isWhite
         && src[0] - 1 === dest[0] && Math.abs(src[1] - dest[1]) === 1) {
        return true;

      // En passant
      // Previous move has to have been black moving a pawn 2 squares from its starting position. 
      // White's pawn has to be next to the pawn that moved the previous move. Target destination 
      // has to be the square behind black's pawn that moved previously.
      } else if (prevMove.piece === "Pawn" && prevMove.src[0] === 1 && prevMove.dest[0] === 3
          && src[0] === 3 && Math.abs(src[1] - prevMove.dest[1] === 1) && dest[0] === prevMove.dest[0]
          && dest[1] === prevMove.dest[1] - 1) {
        return true
      }

    // Situation where the player is playing black
    } else {

      // Pawn marches 1 square foward
      if (src[0] + 1 === dest[0] && src[1] === dest[1]) {

        return true;

      // Pawn was at starting square and then goes 2 squares forward
      } else if (src[0] === 6 && src[0] + 2 === dest[0] && src[1] === dest[1]) {

        return true;

      // Capturing
      } else if (currentPositions[dest[0]][dest[1]] && currentPositions[dest[0]][dest[1]].isWhite !== this.isWhite
         && src[0] + 1 === dest[0] && Math.abs(src[1] - dest[1]) === 1) {

        return true;
        
      // En passant
      // Previous move has to have been black moving a pawn 2 squares from its starting position. 
      // White's pawn has to be next to the pawn that moved the previous move. Target destination 
      // has to be the square behind black's pawn that moved previously.
      } else if (prevMove.piece === "Pawn" && prevMove.src[0] === 6 && prevMove.dest[0] === 4
          && src[0] === 4 && Math.abs(src[1] - prevMove.dest[1] === 1) && dest[0] === prevMove.dest[0]
          && dest[1] === prevMove.dest[1] + 1) {
        return true
      }

    }

    // If code reaches this point, the bishop cannot move to the destination, return false.
    return false;

  }

  /**
   * Returns an array of all possible moves for the pawn on the square src, where src is an array
   * [row, column].
   * @param {Array} src An array representing the square the pawn is on.
   * @param {Array} currentPositions The 2D matrix representing the current positions of the pieces
   * on the board
   */
  possibleMoves(src ,currentPositions) {
    // TODO: Add en passant

    // Initalize return array
    let result = [];

    // We need to know the pawn color because pawns cannot move backwards, that is to say for black
    // pieces pawns can only go down the board (x+1) and white pieces can only go up the board (x-1).
    // We also need to know if the pawn has moved. If it has not it is allowed to move 2 spaces.
    const isWhite = currentPositions[src[0]][src[1]].isWhite;
    const hasMoved = currentPositions[src[0]][src[1]].hasMoved;

    if (isWhite) {

      // Only add the square if the square is empty
      // Add the square directly in front of the pawn
      if (!currentPositions[src[0]-1][src[1]]) result.push([src[0] - 1, src[1]]);
      // Add the square two spaces in front of the pawn if the pawn has not moved yet
      if (!hasMoved && !currentPositions[src[0]-2][src[1]]) result.push([src[0] - 2, src[1]]);

      // If there is an opposing piece diagonally in front of the pawn, the pawn can go there
      // and capture that piece
      if (src[1] < 7 && currentPositions[src[0]-1][src[1]+1] !== null && currentPositions[src[0]-1][src[1]+1].isWhite === !isWhite) {
        result.push([src[0] - 1, src[1] + 1])
      }
      if (src[1] > 0 && currentPositions[src[0]-1][src[1]-1] !== null && currentPositions[src[0]-1][src[1]-1].isWhite === !isWhite) {
        result.push([src[0] - 1, src[1] - 1])
      }
    // Do the same thing for the black pieces
    } else {

      if (!currentPositions[src[0]+1][src[1]]) result.push([src[0] + 1, src[1]]);
      if (!hasMoved && !currentPositions[src[0]+2][src[1]]) result.push([src[0] + 2, src[1]]);

      if (src[1] < 7 && currentPositions[src[0]+1][src[1]+1] && currentPositions[src[0]+1][src[1]+1].isWhite === !isWhite) {
        result.push([src[0] + 1, src[1] + 1])
      }
      if (src[1] > 0 && currentPositions[src[0]+1][src[1]-1] && currentPositions[src[0]+1][src[1]-1].isWhite === !isWhite) {
        result.push([src[0] + 1, src[1] - 1])
      }

    }

    return result;

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
