// File for helper functions to help facilitate the game

/**
 * Function to see if the King of a color is in check
 * @param {*} isWhite 
 * @param {*} currentPositions 
 */
export function isKingInCheck(kingLocation, currentPositions) {

  // Tell if we are dealing with the white or black king
  const isWhite = currentPositions[kingLocation[0]][kingLocation[1]].isWhite;

  // Iterate through the entire board and check to see if any opposing piece can go to the square
  // the king we are looking at is on.
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      
    }
  }
}