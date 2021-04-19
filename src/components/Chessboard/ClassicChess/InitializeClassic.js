import { King, Queen, Rook, Bishop, Knight, Pawn } from '../Pieces';

/**
 * 
 * @returns 2-D array representing a chessboard oriented in white's perspective (index [7][3] would be white's queen)
 * with all the pieces in the starting position of a classical game of chess. 
 */
export default function InitializeClassicChess() {

  // Initalize the array representing the chessboard
  let board = [];

  // Add the first row, which would be row of black's minor and major pieces
  let firstRow = [new Rook(false), new Knight(false), new Bishop(false), new Queen(false), 
    new King(false), new Knight(false), new Bishop(false), new Rook(false)];
  board.push(firstRow)

  // Add the second row, which is black's row of pawns
  let secondRow = [];
  for (let i = 0; i < 8; i++) {
    secondRow.push(new Pawn(false));
  };
  board.push(secondRow)

  // The middle four rows are initially empty at the beginning of every game
  let centerRow = Array(8).fill(null);
  for (let i = 0; i < 5; i++) {
    board.push(centerRow);
  }

  // Add the seventh row, which is white's row of pawns
  // let seventhRow = [];
  // for (let i = 0; i < 8; i++) {
  //   seventhRow.push(new Pawn(true));
  // };
  // board.push(seventhRow)

  // Add the eighth row, which is white's row of minor and major pieces
  let eighthRow = [new Rook(true), new Knight(true), new Bishop(true), new Queen(true), 
    new King(true), new Knight(true), new Bishop(true), new Rook(true)];
  board.push(eighthRow)

  // Return the populated board
  return board;
}
