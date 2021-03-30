import React, { useState } from 'react'
import Board from '../Board';
import InitializeClassic from './InitializeClassic';

export default function ClassicChess() {
  
  // Initialize default state
  const [positions, setPositions] = useState(InitializeClassic())
  const [isWhitesTurn, setTurn] = useState(true); // True is white's turn, false is black's turn

  console.log(positions);

  return (
    <div className="game">
      <Board />
    </div>
  )
}
