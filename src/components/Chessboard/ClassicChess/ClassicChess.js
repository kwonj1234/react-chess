import React, { useState, useEffect, useRef } from 'react'
import Board from '../Board';
import InitializeClassic from './InitializeClassic';
import { areArraysEqual } from '../../utils';
import PromotionModal from '../../PromotionModal';
import { previousMove } from '../utils';

export default function ClassicChess() {
  
  // Initialize default state
  const [positions, setPositions] = useState(InitializeClassic())
  const [isWhitesTurn, setTurn] = useState(true); // True is white's turn, false is black's turn
  // Square from which a piece starts from
  const [startingSquare, setStartingSquare] = useState([null, null]);
  // Possible moves for selected piece
  const [possibleMoves, setPossibleMoves] = useState([]);
  // Record of captured pieces
  const [capturedWhitePieces, setCapturedWhitePieces] = useState([]);
  const [capturedBlackPieces, setCapturedBlackPieces] = useState([]);
  // Record of all the moves made thus far
  let moves = useRef([]);
  let movesIndex = useRef(0);
  // State for promotion modal, if a pawn tries to promote.
  const [isPromotionModalOpen, setPromotionModalOpen] = useState(false);

  useEffect(() => {
    
  }, [])

  /**
   * Function to handle changing state of the board to a previous move
   * @param {Boolean} deletePreviousMove If you want to undo a move completely, removes the last move in the moves array;
   */
  function handlePrevMove(deletePreviousMove=false) {

    // Do not run function if there is no move to go back to
    if (moves.current.length > 0 && movesIndex.current > 0) {

      movesIndex.current = movesIndex.current - 1;
      const previousPositions = previousMove(positions, moves.current[movesIndex.current]);
      changePositionsState(previousPositions);

      if (deletePreviousMove) {

        moves.current.pop();

      }

    } else {
      return;
    }

  }

  /**
   * Function to close the promotion modal
   */
  function handleModalClose() {
    handlePrevMove(true);
    setPromotionModalOpen(false);
  }
  
  /**
   * Helper function to setState for positions
   * @param {Array} newPositions 8x8 Array representing pieces on the board
   */
  function changePositionsState(newPositions) {
    setPositions(prevState => 
      prevState.map((tempRow, i) => 
        tempRow.map((tempSquare, j) => 
          newPositions[i][j]
        )
      )
    );
  }

  /**
   * Function to handle when user selects a piece to promote to in the promotion modal.
   * @param {String} promotion Queen, Rook, Bishop, Knight
   */
  function handlePromotionSelect(promotion) {

    if (promotion === "Queen" || promotion === "Rook" || promotion === "Bishop" || promotion === "Knight") {

      // Once you know what the user wants to promote the pawn to, replace the pawn with the promoted piece.
      // Use the last move in the moves array

      handleModalClose(false);

    }

  }

  /**
   * Function to search for move inside list of moves
   * @param {*} dest Array of length 2, Array representing the square you want to move to
   * @param {*} possibleMovesArray Array of Array's, All possible moves for the currently selected 
   */
  function isMovePossible(dest, possibleMovesArray) {

    // If possibleMoves length is greater than 0, search through it to see if the dest square exists
    // within possibleMoves
    if (possibleMovesArray.length > 0) {

      // For each move compare the first and second index to the first and second index of dest.
      // move and dest will both be always length of 2, unless it's en passant
      for (const move of possibleMovesArray) {

        if (move[0] === dest[0] && move[1] === dest[1]) {

          return move;
        
        }

      }

    }

    // If possibleMoves length is 0 than there are no possible moves 
    // If the function reaches this point, it means the move does not exist within possibleMoves.
    return false;

  } 

  /**
   * Function to handle when a user clicks on a square
   * @param {*} row 
   * @param {*} column 
   */
  const handleSquareClick = (row, column) => {

    // If the game is over do nothing when a square is clicked
    if (isWhitesTurn === "game over") {
      return;
    }

    // Situation where there is no starting square
    if (areArraysEqual(startingSquare, [null, null])) {

      // If there is no startingSquare and the user selects an empty square, or selects a square 
      // occupied by the opposing piece do not do anything
      if (!positions[row][column] || isWhitesTurn !== positions[row][column]?.isWhite) {

        return;

      // If the square is occupied by a current player's piece and there was no starting square selected
      // set the clicked square as the starting square and highlight it
      } else if (positions[row][column].isWhite === isWhitesTurn) {

        setStartingSquare([row, column])

        // Pawns can en passant so they need to know the last move to get all possible moves, all
        // other pieces do not need this.
        // If there are no moves made, also use the normal possibleMoves. possibleMoves method for 
        // Pawns have a default value for the third parameter
        if (moves.length > 0 && positions[row][column].constructor.name === "Pawn") {
          setPossibleMoves([ ...positions[row][column].possibleMoves([row, column], positions, moves[moves.length - 1]) ])
        } else {
          setPossibleMoves([...positions[row][column].possibleMoves([row, column], positions)])
        }

      }

    // Situation where there is a starting square selected
    } else {

      // Situation where the user tries to move a piece from one square to an empty square, or a 
      // square with an opposing piece on it
      if (!positions[row][column] || isWhitesTurn !== positions[row][column]?.isWhite) {

        // If the move is possible, set new positions and set the turn to the next player
        const possibleMove = isMovePossible([row, column], possibleMoves)

        if (possibleMove) {

          // To update a 2D array in state, we must iterate through the arrays and return the value
          // we want at that point.
          let tempPostitions = positions.map(function(arr) {
            return arr.slice();
          });

          // Initalize move record
          let move = {
            piece: positions[startingSquare[0]][startingSquare[1]].constructor.name,
            isWhite: isWhitesTurn,
            start: startingSquare,
            dest: [row, column],
            captured: null,
            special: null
          }

          // If there's a piece on the destination square, add it to the captured pieces list
          if (positions[row][column]) {

            // Add the captured piece to the move record
            move.captured = positions[row][column];

            if (isWhitesTurn) {

              let tempCapturedPieces = [...capturedBlackPieces];
              setCapturedBlackPieces([...tempCapturedPieces, positions[row][column]])

            } else {

              let tempCapturedPieces = [...capturedWhitePieces];
              setCapturedWhitePieces([...tempCapturedPieces, positions[row][column]])

            };

          // If the possibleMove's length is 3, it is en passant
          } else if (possibleMove.length === 3 && possibleMove[2] === "en passant") {

            move.captured = positions[row][column];

          };

          // Set the hasMoved property of the piece to true and move the piece
          tempPostitions[startingSquare[0]][startingSquare[1]].hasMoved = true;
          // Set the destination square to be the the moving piece
          tempPostitions[row][column] = tempPostitions[startingSquare[0]][startingSquare[1]];
          // Set the starting square to null as the moving piece is no longer there
          tempPostitions[startingSquare[0]][startingSquare[1]] = null;

          // In case of a special move
          if (possibleMove.length === 3) {

            // In the case of en passant
            // White en passant
            if (possibleMove[2] === "en passant" && isWhitesTurn) {

              tempPostitions[row + 1][column] = null;
              move.special = "en passant";

            // Black en passant
            } else if (possibleMove[2] === "en passant" && !isWhitesTurn) {

              tempPostitions[row - 1][column] = null;
              move.special = "en passant";

            // In the case of castling
            } else if (possibleMove[2] === "castle") {

              // Queen side castling
              if (startingSquare[1] > possibleMove[1]) {

                move.special = "queen side castle"; 

                // Set the hasMoved value to true for the castling rook
                tempPostitions[row][0].hasMoved = true;
                // Move queen side rook from the start of the row to next to the king
                tempPostitions[row][column + 1] = tempPostitions[row][0]
                tempPostitions[row][0] = null;

              // King side castling
              } else if (startingSquare[1] < possibleMove[1]) {

                move.special = "king side castle"; 

                // Set the hasMoved value to true for the castling rook
                tempPostitions[row][7].hasMoved = true;
                // Move queen side rook from the start of the row to next to the king
                tempPostitions[row][column - 1] = tempPostitions[row][7]
                tempPostitions[row][7] = null;

              }

            };

          };

          moves.current.push({ ...move })
          movesIndex.current = moves.current.length;
          console.log(movesIndex.current)

          changePositionsState(tempPostitions);

          setStartingSquare([null, null]);
          setPossibleMoves([]);

          if (move.captured === "King") {
            setTurn("game over");
          }

          // In the case of pawn promotion
          if (positions[startingSquare[0]][startingSquare[1]].constructor.name === "Pawn" && (row === 7 || row === 0)) {

            setPromotionModalOpen(true);
            return;

          }

          // SetTurn is after the pawn promotion check because the turn is not over for the player 
          // while they take time to decide what they want to promote the pawn to.
          setTurn(!isWhitesTurn);

        // If the move is not possible, reset startingSquare and possibleMoves
        } else {

          setStartingSquare([null, null]);
          setPossibleMoves([]);

        }

      // If the square is occupied by the current player's piece and there was a starting square selected
      // set the clicked square as the new starting square and highlight it
      } else if (positions[row][column].isWhite === isWhitesTurn) {

        let temp = [row, column]
        setStartingSquare(temp)
        setPossibleMoves([...positions[temp[0]][temp[1]].possibleMoves(temp, positions)])

      }

    }

  }

  return (
    <div className="game">
      {isPromotionModalOpen ? <PromotionModal isOpen={isPromotionModalOpen} isWhite={isWhitesTurn} onClose={handleModalClose}/> : <div/>}
      <Board positions={positions} onClick={handleSquareClick} startingSquare={startingSquare}/>
      <button onClick={() => handlePrevMove(positions, moves[moves.length - 1])}>Previous Move</button>
    </div>
  )
}