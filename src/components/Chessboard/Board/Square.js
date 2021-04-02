import React from 'react'

export default function Square(props) {
  // Deconstruct props
  const { color, row, column, size, pieceImage } = props;

  console.log(pieceImage)
  return (
    <div 
      key={`square${row}${column}`} 
      style={{width: size, height: size}} 
      className={`square ${color}`}
    />
  )
}
