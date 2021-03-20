import React from 'react'

export default function Square(props) {
  // Deconstruct props
  const { color, row, column, size } = props;
  return (
    <div key={`square${row}${column}`} style={{width: size, height: size}} className={`square ${color}`}/>
  )
}
