import React, { useState, useEffect } from 'react'
import { Square } from '../Chessboard';

/**
 * Modal to display when a pawn reaches the other side of the board and promotes. User will be able
 * to choose what the pawn promotes to.
 * @param {isOpen} Boolean, determines if the modal is open or not.
 * @param {isWhite} Boolean, determines the color of the promoted piece.
 * @param {onSelect} Callback, function to handle what happens when the user selects the piece they
 * want to promote to.
 * @param {onClose} Callback, function to handle what happens when the user closes the modal without
 * selecting anything 
 * @param {width} num, determines the size of the buttons in the modal
 * @returns 
 */
export default function PromotionModal(props) {

  // Deconstruct props
  const { isOpen, isWhite, onClose, onSelect } = props;

  // Initalize state
  // const [squareSize, setSize] = useState(120)

  // Add event listeners for changes in the window height and width
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerHeight < window.innerWidth) {
  //       setSize(window.innerHeight / 9)
  //     } else {
  //       setSize(window.innerWidth / 9)
  //     };
  
  //   });

  // }, []);
  
  // Images for pieces
  const bishopImage = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  const knightImage = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
  const queenImage = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  const rookImage = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  
  // If isOpen is true return the modal, else return nothing
  if (isOpen) {

    return (
      <div className="PromotionModal">
        <div 
          className={`square`}
          style={{
            backgroundImage: `url(${queenImage})`,
          }} 
          onClick={() => onSelect('Queen')}
        />
        <div 
          className={`square`}
          style={{
            backgroundImage: `url(${rookImage})`,
          }} 
          onClick={() => onSelect('Rook')}
        />
        <div 
          className={`square`}
          style={{
            backgroundImage: `url(${bishopImage})`,
          }} 
          onClick={() => onSelect('Bishop')}
        />
        <div 
          className={`square`}
          style={{
            backgroundImage: `url(${knightImage})`,
          }} 
          onClick={() => onSelect('Knight')}
        />
      </div>
    );

  } else {

    return null;

  }

}
