import React, { Component } from 'react'

/**
 * Display the Queen piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class Bishop extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
