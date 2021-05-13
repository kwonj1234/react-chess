// Utility functions for the pieces

/**
 * Returns an array of all possible squares that the piece can reach by going diagonally from its
 * current position
 * @param {Array} pieceSq The current square of the piece you are querying represented as an array
 * where index 0 is the row and index 1 is the column. i.e. [row, column].
 * @param {Array} currentPositions The 2D matrix representing the current posistions of the pieces
 * the the board
 */
export function possibleSquaresDiagonal(pieceSq, currentPositions) {
  
  // Initalize return variable
  let result = [];

  // Create a variable that queries what color is the piece we are looking at. 
  let pieceColor = currentPositions[pieceSq[0]][pieceSq[1]].isWhite;

  // Create a temp square that represents the destination square
  let dest = [...pieceSq];

  // Check what squares are available to the top right
  for (let i = 0; i < 8; i++) {

    // Increment the destination square to the top right square of the current square
    dest[0] -= 1;
    dest[1] += 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }
  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the bottom right
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the bottom right square of the current square
    dest[0] += 1;
    dest[1] += 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the top left
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the top left square of the current square
    dest[0] -= 1;
    dest[1] -= 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the bottom left
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the bottom left square of the current square
    dest[0] += 1;
    dest[1] -= 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // return result array
  return result;

}

/**
 * Returns a bool to see if a destination is reachable, diagonally, from the current square. 
 * @param {Array} src Array of 2 numbers representing the coordinate square. 
 * @param {Array} dest Array of 2 numbers representing the coordinae square.
 * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
 * on the board
 */
export function isDiagonalMovePossible(src, dest, currentPositions) {
  
  // Figure out color of the piece we are looking at
  const isWhite = currentPositions[src[0]][src[1]].isWhite;

  // For a diagonal move, the change in the x will always be the same as the 
  // the change in the y.
  if (Math.abs(src[0] - dest[0]) === 0 && Math.abs(src[1] - dest[1]) === 0) {

    return true

  } else if (Math.abs(src[0] - dest[0]) === Math.abs(src[1] - dest[1])) {

    // Change in the x and y axis
    const deltaX = dest[1] - src[1];
    const deltaY = dest[0] - src[0];

    // Number of squares between the src square and the destination square
    const numOfSquares = Math.abs(src[0] - dest[0])

    // For each square between the destination square and the source square, check to see that it is
    // empty. You cannot move through pieces.
    for (let i = 1; i < numOfSquares; i++) {

      // Increment the src square to each of the squares between the dest and the src
      deltaX > 0 ? src[1] += 1 : src[1] -= 1;
      deltaY > 0 ? src[0] += 1 : src[0] -= 1;

      // If there is a piece on a square between the src and dest, the piece we are looking at cannot
      // pass. Even if it's an opposing piece it must first capture the piece before getting to the 
      // dest square.
      if (currentPositions[src[0]][src[1]]) {

        return false;

      } 

    }

    // Check the destination square. If it is the same color as the current piece, we cannot have 
    // two pieces of the same color occupying the same square, return false. If it's an opposing
    // piece or empty square return true.
    if (!currentPositions[dest[0]][dest[1]] || currentPositions[dest[0]][dest[1]].isWhite !== isWhite) {

      return true;

    }

  }

  // If code reaches this point, the bishop cannot move to the destination, return false.
  return false;

}

/**
 * Returns an array of all possible squares that the piece can reach by going horizontally or 
 * vertically from its current position
 * @param {Array} pieceSq The current square of the piece you are querying represented as an array
 * where index 0 is the row and index 1 is the column. i.e. [row, column].
 * @param {Array} currentPositions The 2D matrix representing the current posistions of the pieces
 * the the board
 */
export function possibleSquaresStraightLine(pieceSq, currentPositions) {
  
  // Initalize return variable
  let result = [];

  // Create a variable that queries what color is the piece we are looking at. 
  let pieceColor = currentPositions[pieceSq[0]][pieceSq[1]].isWhite;

  // Create a temp square that represents the destination square
  let dest = [...pieceSq];

  // Check what squares are available to the right
  for (let i = 0; i < 8; i++) {

    // Increment the destination square to the right square of the current square
    dest[1] += 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }
  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the left
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the left square of the current square
    dest[1] -= 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the top
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the top square of the current square
    dest[0] -= 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // Create a temp square that represents the destination square
  dest = [...pieceSq];

  // Check what squares are available to the bottom left
  for (let i = 0; i < 8; i++) {

    // Increment the temp square to the bottom left square of the current square
    dest[0] += 1;

    // If the destination square is available, add it to the results, 
    // if we cannot reach the destination square or move past it, break the loop
    let querySq = canPieceGoToDest(pieceColor, dest, currentPositions);
    if (querySq.isAvailable) {

      result.push([...dest]);

    }
    if (querySq.break) {

      break;

    }

  }

  // return result array
  return result;

};

/**
 * Returns a bool to see if a destination is reachable from the current square by moving in a 
 * straight line. 
 * @param {Array} src Array of 2 numbers representing the coordinate square. 
 * @param {Array} dest Array of 2 numbers representing the coordinae square.
 * @param {Array} currentPositions 2D Array representing the current positions of all the pieces 
 * on the board
 */
 export function isStraightLineMovePossible(src, dest, currentPositions) {
  
  // Figure out color of the piece we are looking at
  const isWhite = currentPositions[src[0]][src[1]].isWhite;

  // For a straight line move, the row or column will always be the same.
  if (src[0] === dest[0] && src[1] === dest[1]) {

    return true

  } else if (src[0] === dest[0] || src[1] === dest[1]) {

    // Initialize variable to record the number of squares between the src square and the 
    // destination square.
    let numOfSquares;
    // Initialize variable to record which index we are looking at, the one representing the row
    // or the column
    let index;

    // If the row is the same then the number of squares between the src square and the destination
    // square is the difference in the column. Vice versa if the column is the same.
    if (src[0] === dest[0]) {
      numOfSquares = dest[1] - src[1];
      index = 1;
    } else {
      numOfSquares = dest[0] - src[0];
      index = 0;
    }

    // For each square between the destination square and the source square, check to see that it is
    // empty. You cannot move through pieces.
    for (let i = 1; i < Math.abs(numOfSquares); i++) {

      // Increment the src square to each of the squares between the dest and the src
      numOfSquares > 0 ? src[index] += 1 : src[index] -= 1;

      // If there is a piece on a square between the src and dest, the piece we are looking at cannot
      // pass. Even if it's an opposing piece it must first capture the piece before getting to the 
      // dest square.
      if (currentPositions[src[0]][src[1]]) {

        return false;

      } 

    }

    // Check the destination square. If it is the same color as the current piece, we cannot have 
    // two pieces of the same color occupying the same square, return false. If it's an opposing
    // piece or empty square return true.
    if (!currentPositions[dest[0]][dest[1]] || currentPositions[dest[0]][dest[1]].isWhite !== isWhite) {

      return true;

    }

  }

  // If code reaches this point, the bishop cannot move to the destination, return false.
  return false;

}

/**
 * Returns object with fields break and isAvailable to represent if the function should keep 
 * querying past this square or if the loop should break and if the square is available.
 * @param {boolean} isWhite Represents the piece color
 * @param {Array} dest The coordinates of the destination square
 * @param {Array} currentPositions The 2D matrix of the current positions of the pieces on the 
 * board
 */
export function canPieceGoToDest(isWhite, dest, currentPositions) {

  // If the tempSq goes out of the board break
  if ((dest[0] > 7 || dest[0] < 0 || dest[1] > 7 || dest[1] < 0)) {

    return {
      break: true,
      isAvailable: false
    }

  // If there is nothing in the square, the square is available
  } else if (!currentPositions[dest[0]][dest[1]]) {

    return {
      break: false,
      isAvailable: true,
    }

  // If there is a piece of the same color of the piece we are querying in this square, break,
  } else if (currentPositions[dest[0]][dest[1]] && currentPositions[dest[0]][dest[1]].isWhite === isWhite) {

    return {
      break: true,
      isAvailable: false,
    }

  // If there is a piece of the opposite color of the piece we are querying in this square, add 
  // the square to the result but break the for loop because you cannot go past that piece
  } else if (currentPositions[dest[0]][dest[1]] && currentPositions[dest[0]][dest[1]].isWhite !== isWhite) {

    return {
      break: true,
      isAvailable: true,
    }

  }

}