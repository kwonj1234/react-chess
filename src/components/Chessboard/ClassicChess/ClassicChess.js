import React, { useState } from 'react'
import Board, { InitializeClassicChess } from './InitializeClassic';

export default function ClassicChess() {
  // Initialize default state
  const [positions, setPositions] = useState(InitializeClassicChess())
  const [isWhitesTurn, setTurn] = useState(true); // True is white's turn, false is black's turn

  console.log(positions);

  return (
    <div className="game">
      <Board />
    </div>
  )
}
