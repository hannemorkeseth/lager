import React from 'react'


function Popup(props) {
  function handleChange(event) {
    props.handleInputChange(event.target.value)
  }
  function handleRadioChange(event) {
    props.handleRadioChange(event.target.value)
  }
  return (
    <div className="popup">
    <h2>Opprett ny liste</h2>
    <form>
      <input type="text" placeholder="Tittel..." value={props.value} onChange={handleChange} /><br />
      <div onChange={handleRadioChange}>
        <input type="radio" name="color-selection" id="gronn" value="166,216,146" />
        <label for="gronn">Grønn</label><br />
        <input type="radio" name="color-selection" id="gul" value="245,216,91" />
        <label for="gul">Gul</label><br />
        <input type="radio" name="color-selection" id="rod" value="227,97,86" />
        <label for="rod">Rød</label><br />
      </div>
      <button className="btn btn-light" onClick={() =>{props.opprettListe()}}>Opprett</button>
    </form>
    </div>
  )
}

export default Popup
