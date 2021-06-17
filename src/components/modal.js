import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modalContent">
        {props.children}
      </div>
    </div>
  )
}
