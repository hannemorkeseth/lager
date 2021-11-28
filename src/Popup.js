import React from 'react'

function Popup(props) {
  return (
    <div className="popup">
    <h2>Opprett ny liste</h2>
    <form>
      <input type="text" placeholder="Tittel..." /><br />
      <input type="radio" id="gronn" value="166,216,146" />
      <label for="gronn">Grønn</label><br />
      <input type="radio" id="gul" value="245,216,91" />
      <label for="gul">Gul</label><br />
      <input type="radio" id="rod" value="227,97,86" />
      <label for="rod">Rød</label><br />
      <button className="btn btn-light" onClick={() => props.opprettListe()}>Opprett</button>
    </form>
    </div>
  )
}

export default Popup
