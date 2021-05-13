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