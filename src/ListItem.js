import React from 'react'

function ListItem(props) {
  return (
    <div className="list-item-container">
      <p className="text-field"><span className="align-middle">{props.vare.vare}</span></p>
      <button className="btn" onClick={() => {props.handlePlusClick(props.vare.id, props.vare.antall)}} style={{backgroundColor: props.buttonColor}}>+</button>
      <p className="number"><span className="align-middle">{props.vare.antall}</span></p>
      <button className="btn" onClick ={() => {props.handleMinusClick(props.vare.id, props.vare.antall)}} style={{backgroundColor: props.buttonColor}}>-</button>
      <button className="btn btn-danger" onClick = {() => {props.handleDelete(props.vare.id)}} >Slett</button>
    </div>
  )
}

export default ListItem
