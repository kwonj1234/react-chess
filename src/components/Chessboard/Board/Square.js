import React from 'react'

export default function Square(props) {
  // Deconstruct props
  const { color, row, column, size, pieceImage } = props;
  // Initialize variables for square background and image for drag
  let backgroundImage = null;
  let dragImage = null;

  // Set the images if there is a piece on this square, else this square is not draggable and there
  // is no piece to be displayed on this square
  if (pieceImage) {
    backgroundImage = `url(${pieceImage})`;

    dragImage = document.createElement('img');
    dragImage.className = 'dragImage';
    dragImage.width = size;
    dragImage.height = size;
    dragImage.src = pieceImage;
    dragImage.backgroundImage = pieceImage;

    // dragImage = new Image(1000, 1000);
    // dragImage.src = pieceImage;
    // dragImage.className = 'dragImage';
  }

  // Function to handle setting ghost image for drag event
  const handDragStart = (e) => {
    e.dataTransfer.setDragImage(dragImage, 25, 25);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Query the element
    const square = document.getElementById('square');

    // The ghost element
    let ghostEle;

    square.addEventListener('dragstart', function(e) {
        ghostEle = document.createElement('div');
        ghostEle.className = 'dragImage';
        ghostEle.width = size;
        ghostEle.height = size;
        ghostEle.src = pieceImage;
        ghostEle.backgroundImage = pieceImage;
        document.body.appendChild(ghostEle);

        e.dataTransfer.setDragImage(ghostEle, 0, 0);
    });

    square.addEventListener('dragend', function(e) {
        document.body.removeChild(ghostEle);
    });
  });

  return (
    <div 
      id='square'
      className={`square ${color}`}
      key={`square${row}${column}`} 
      style={{
        width: size, 
        height: size, 
        backgroundImage: backgroundImage
      }} 
      draggable={pieceImage ? true : false}
      onDragStart={e => handDragStart(e)}
      onDrag={() => {console.log('wtf')}}

    />
  )
}
