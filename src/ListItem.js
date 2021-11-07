import React from 'react'

function ListItem(props) {
  return (
    <div className="list-item-container">
      <p className="text-field">{props.vare.vare}</p>
      <button className="btn" onClick={() => {props.handlePlusClick(props.vare.id)}}>+</button>
      <p className="number">{props.vare.antall}</p>
      <button className="btn" onClick ={() => {props.handleMinusClick(props.vare.id)}}>-</button>
      <button className="btn" onClick = {() => {props.handleDelete(props.vare.id)}} >Delete</button>
    </div>
  )
}

export default ListItem
