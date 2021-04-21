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
  }

  /**
  * Returns a bool to see if a destination is reachable from the current square
  * @param {*} src Array of 2 numbers representing the coordinate square. 
  * @param {*} dest Array of 2 numbers representing the coordinae square.
  * @param {*} isDestOccupied Boolean to see if there is an opposing piece on the coordatinates that dest represents.
  * @param {*} prevMove Object of the previous move. Used to see if en passant is possible.
  */
  isMovePossible(src, dest, isDestOccupied, prevMove) {

    // Pawns have a lot of variety, if they are at the initial position they have the option of 
    // moving 2 spaces as well as 1, en passant, capturing diagonally

    // Pawns for white will behave opposite to the black pawns relative to the grid
    if (this.isWhite) {
      
      // Pawn marches 1 square foward
      if (src[0] - 1 === dest[0] && src[1] === dest[1]) {
        return true;
      // Pawn was at starting square and then goes 2 squares forward
      } else if (src[0] === 6 && src[0] - 2 === dest[0] && src[1] === dest[1]) {
        return true;
      // Capturing
      } else if (isDestOccupied && src[0] - 1 === dest[0] && Math.abs(src[1] - dest[1]) === 1) {
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
      } else if (isDestOccupied && src[0] + 1 === dest[0] && Math.abs(src[1] - dest[1]) === 1) {
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

    return false;
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
