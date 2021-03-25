import React, { Component } from 'react'

/**
 * Display the Rook piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class Rook extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
