import React from 'react'

export default function Board() {

  // Initalize array to store the board
  const board = [];

  // create the board
  for (let i = 0; i < 8; i++) {
    let boardRow = []

    for (let j = 0; j < 8; j++) {
      boardRow.push(0)
    }

    board.push(<div style={{display: 'flex'}}>{boardRow}</div>)
  }
  return (
    <div>
      {board}
    </div>
  )
}
