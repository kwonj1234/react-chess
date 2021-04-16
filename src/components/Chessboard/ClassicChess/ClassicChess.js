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

  useEffect(() => {
    console.log(startingSquare)
    console.log(isWhitesTurn)
  }, [startingSquare])

  /**
   * Function to handle when a user clicks on a square
   * @param {*} row 
   * @param {*} column 
   */
  const handleSquareClick = (row, column) => {

    console.log(startingSquare, [row, column])
  

    // Situation where there is no starting square
    if (areArraysEqual(startingSquare, [null, null])) {

      // If there is no startingSquare and the user selects an empty square, or selects a square 
      // occupied by the opposing piece do not do anything
      if (!areArraysEqual([row, column], [null, null] || isWhitesTurn !== positions[row][column]?.isWhite)) {

        return;

      // If the square is occupied by a current player's piece and there was no starting square selected
      // set the clicked square as the starting square and highlight it
      } else if (positions[row][column].isWhite === isWhitesTurn) {

        let temp = [row, column]
        setStartingSquare(temp)

      }

    // Situation where there is a starting square selected
    } else {

      // If the square is occupied by a current player's piece and there was a starting square selected
      // set the clicked square as the new starting square and highlight it
      if (positions[row][column].isWhite === isWhitesTurn) {

        let temp = [row, column]
        setStartingSquare(temp)

      }

    }

  }

  return (
    <div className="game">
      <Board positions={positions} onClick={handleSquareClick} startingSquare={startingSquare}/>
    </div>
  )
}
