// File for helper functions to help facilitate the game

/**
 * Functions:
 * 
 * isKingInCheck
 * 
 * previousMove
 * 
 * nextMove
 * 
 */

/**
 * Function to see if the King of a color is in check
 * @param {*} isWhite 
 * @param {*} currentPositions 
 */
 export function isKingInCheck(kingLocation, currentPositions) {

  // Tell if we are dealing with the white or black king
  const isWhite = currentPositions[kingLocation[0]][kingLocation[1]].isWhite;

  // If there are more than 1 checks on the king, the king HAS to move. Otherwise another piece can
  // move into a position that blocks the piece giving the check
  let checks = 0;

  // Iterate through the entire board and check to see if any opposing piece can go to the square
  // the king we are looking at is on.
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      
      if (currentPositions[i][j] && currentPositions[i][j].isWhite !== isWhite) {
        
        // If an opposing piece can reach the king's location, add 1 to checks
        if (currentPositions[i][j].isMovePossible([i, j], kingLocation, currentPositions)) checks += 1;

      }
    }
  }

  return checks;
  
}

/**
 * Undo the last move and return the state of the board to the second to last move.
 * @param {Array} currentBoard The current location of the pieces on the board
 * @param {Object} moveToUndo The object containing the details of the last move
 * @param {Boolean} deleteMove Boolean to represent if you want to delete the last move
 * @returns Object with keys, board and moves representing the new board after undoing the last move
 * and the new array of moves if 
 */
export const previousMove = (positions, moveToUndo) => {

  // Just a reminder of the structure of what moves objects look like
  // piece: piece
  // isWhite: color
  // start: [row, column]
  // dest: [row, column],
  // captured: the piece that was captured
  // special: "en passant", "queen side castle", "king side castle"

  const start = moveToUndo.start;
  const dest = moveToUndo.dest;

  // Move the piece back to its starting square
  positions[start[0]][start[1]] = positions[dest[0]][dest[1]]

  // If there was a piece captured replace it on the destinatoin square
  if (moveToUndo.captured) {

    positions[dest[0]][dest[1]] = moveToUndo.captured;

  } else {

    positions[dest[0]][dest[1]] = null;

  }

  return positions;

}

/**
 * Undo the last move and return the state of the board after.
 * @param {Array} currentBoard The current location of the pieces on the board
 * @param {Object} nextMove The object containing the details of the nextMove
 */
export const nextMove = (currentBoard, nextMove) => {

}