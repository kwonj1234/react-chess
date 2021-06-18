// File for helper functions to help facilitate the game

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
 * @param {Array} moves The array containing all the moves of the current game
 * @param {Boolean} deleteMove Boolean to represent if you want to delete the last move
 */
export const previousMove = (positions, moves, deleteMove=false) => {

  // Initalize return
  let result = {
    board: [],
    moves: [],
  }

  const moveToUndo = moves[moves.length - 1];
  console.log(moveToUndo)

  // To update a 2D array in state, we must iterate through the arrays and return the value
  // we want at that point.
  let tempPostitions = positions.map(function(arr) {
    return arr.slice();
  });

}

/**
 * Undo the last move and return the state of the board after.
 * @param {Array} currentBoard The current location of the pieces on the board
 * @param {Object} nextMove The object containing the details of the nextMove
 */
export const nextMove = (currentBoard, nextMove) => {

}