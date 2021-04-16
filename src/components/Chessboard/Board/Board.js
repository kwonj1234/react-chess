import React, { useEffect, useState } from 'react';
import { areArraysEqual } from '../../utils';
import Square from './Square';

export default function Board(props) {
    // deconstruct props
    let { theme, positions, onClick, startingSquare } = props;

  // Initalize state
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [squareSize, setSize] = useState(120)

  // Add event listeners for changes in the window height and width
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  // Add useEffect for changes in height and width variables and change squareSize accordingly
  useEffect(() => {
    if (height < width) {
      setSize(height / 9)
    } else {
      setSize(width / 9)
    };
  }, [height, width])

  // Set default theme
  if (!theme) {
    theme = {
      light: "wheat",
      dark: "chocolate",
      highlight: 'rgb(111,143,114)'
    }
  }

  // Initalize array to store the board
  const board = [];

  // Create the board
  for (let i = 0; i < 8; i++) {

    // Initalize the array for board
    let boardRow = []
    // Initalize square color for row
    let color;
    if (i % 2 === 0) {
      color = theme.light;
    } else {
      color = theme.dark;
    }

    // The board has 8 rows, for each row add 8 columns
    for (let j = 0; j < 8; j++) {
      
      // If the starting square is the current square, highlight it use the color
      let squareColor;
      if (areArraysEqual(startingSquare, [i, j])) {
        squareColor = theme.highlight;
      } else {
        squareColor = color;
      }

      // Add a square to the row
      boardRow.push(
        <Square 
          key={`${i}${j}`}
          color={squareColor} 
          row={i} 
          column={j} 
          size={squareSize} 
          startingSquare={startingSquare}
          pieceImage={positions[i][j] ? positions[i][j].image : null}
          onClick={onClick}
        />
      )

      // Change the square color for the next square
      color = color === theme.light ? theme.dark : theme.light;
    }
    board.push(<div key={`row${i}`}style={{display: 'flex'}}>{boardRow}</div>)
  }

  return (
    <div>
      {board}
    </div>
  )
}
