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
  if ((dest[0] > 7 || dest[0] < 1 || dest[1] > 7 || dest[1] < 0)) {

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