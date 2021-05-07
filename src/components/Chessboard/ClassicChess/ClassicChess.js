import React, { useState, useEffect } from 'react'
import Board from '../Board';
import { areArraysEqual } from '../../utils';
import InitializeClassic from './InitializeClassic';

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
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    
  }, [])

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
      // move and dest will both be always length of 2
      for (const move of possibleMovesArray) {

        if (move[0] === dest[0] && move[1] === dest[1]) {

          return true;
        
        }

      }

    // If possibleMoves length is 0 than there are no possible moves 
    } else {

      return false;

    }

    // If the function reaches this point, it means the move does not exist within possibleMoves.
    return false;

  } 

  /**
   * Function to handle when a user clicks on a square
   * @param {*} row 
   * @param {*} column 
   */
  const handleSquareClick = (row, column) => {

    // Situation where there is no starting square
    if (areArraysEqual(startingSquare, [null, null])) {

      // If there is no startingSquare and the user selects an empty square, or selects a square 
      // occupied by the opposing piece do not do anything
      if (!positions[row][column] || isWhitesTurn !== positions[row][column]?.isWhite) {
        console.log("EMPTY SQUARE")
        return;

      // If the square is occupied by a current player's piece and there was no starting square selected
      // set the clicked square as the starting square and highlight it
      } else if (positions[row][column].isWhite === isWhitesTurn) {
        console.log("Select starting square")
        let temp = [row, column]
        setStartingSquare(temp)
        setPossibleMoves([...positions[temp[0]][temp[1]].possibleMoves(temp, positions)])
        console.log(possibleMoves)
      }

    // Situation where there is a starting square selected
    } else {

      // Situation where the user tries to move a piece from one square to an empty square, or a 
      // square with an opposing piece on it
      if (!positions[row][column] || isWhitesTurn !== positions[row][column]?.isWhite) {
        
        // If the move is possible, set new positions and set the turn to the next player
        if (isMovePossible([row, column], possibleMoves)) {

          // Initalize move record
          let move = {
            isWhite: isWhitesTurn,
            start: startingSquare,
            dest: [row, column],
            captured: null
          }

          // If there's a piece on the destination square, add it to the captured pieces list
          if (positions[row][column]) {

            // Add the captured piece to the move record
            move.captured = positions[row][column]

            if (isWhitesTurn) {

              let tempCapturedPieces = [...capturedBlackPieces];
              tempCapturedPieces.push(positions[row][column]);
              setCapturedBlackPieces([...tempCapturedPieces])

            } else {

              let tempCapturedPieces = [...capturedWhitePieces];
              tempCapturedPieces.push(positions[row][column]);
              setCapturedWhitePieces([...tempCapturedPieces])

            };

          };

          // To update a 2D array in state, we must iterate through the arrays and return the value
          // we want at that point.
          setPositions(prevState => 
            prevState.map((tempRow, i) => 
              tempRow.map((tempSquare, j) => {
                if (i === startingSquare[0] && j === startingSquare[1]) {
                  return null;
                } else if (i === row && j === column) {
                  return positions[startingSquare[0]][startingSquare[1]];
                } else {
                  return tempSquare;
                }
              })
            ) 
          );

          setMoves(prevState => [...prevState, move])
          setStartingSquare([null, null]);
          setPossibleMoves([]);
          setTurn(!isWhitesTurn);

        // If the move is not possible, reset startingSquare and possibleMoves
        } else {

          setStartingSquare([null, null]);
          setPossibleMoves([]);

        }
        console.log(possibleMoves)
        console.log(isMovePossible([row, column], possibleMoves))

      // If the square is occupied by a current player's piece and there was a starting square selected
      // set the clicked square as the new starting square and highlight it
      } else if (positions[row][column].isWhite === isWhitesTurn) {

        let temp = [row, column]
        setStartingSquare(temp)
        setPossibleMoves([...positions[temp[0]][temp[1]].possibleMoves(temp, positions)])
        console.log(possibleMoves)

      // From the starting square to the selected square, see if that move is possible for the 
      // piece on the starting square
      } else {

      }

    }

  }

  return (
    <div className="game">
      <Board positions={positions} onClick={handleSquareClick} startingSquare={startingSquare}/>
    </div>
  )
}