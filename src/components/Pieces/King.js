import React, { Component } from 'react'

/**
 * Display the King piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class King extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
