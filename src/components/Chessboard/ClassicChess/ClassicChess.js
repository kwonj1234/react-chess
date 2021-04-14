import React, { useState } from 'react'
import Board from '../Board';
import InitializeClassic from './InitializeClassic';

export default function ClassicChess() {
  
  // Initialize default state
  const [positions, setPositions] = useState(InitializeClassic())
  const [isWhitesTurn, setTurn] = useState(true); // True is white's turn, false is black's turn
  // Square from which a piece starts from
  const [startingSquare, setStartingSquare] = useState([null, null]);

  /**
   * Function to handle when a user clicks on a square
   * @param {*} row 
   * @param {*} column 
   */
  const handleSquareClick = (row, column) => {
    // If the square is occupied by a piece of the opposite color of the player whose turn it is,
    // do not do anything

  }

  return (
    <div className="game">
      <Board positions={positions} />
    </div>
  )
}
