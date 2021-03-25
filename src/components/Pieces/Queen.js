import React, { Component } from 'react'

/**
 * Display the Queen piece on the board. 
 * @param {*} isWhite bool, true being white and false being black
 */
export default class Queen extends Component {
  constructor(isWhite) {
    this.isWhite = isWhite;
    this.image = isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
