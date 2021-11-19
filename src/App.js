import React, { useState } from 'react'
import lister from './lister'
import List from './List'

function App() {
 
  const [lister, setLister] = useState({lister});

  const varelister = lister.map(liste => <List key={liste.id} tittel={liste.tittel} saveState={liste.state} color={liste.color} buttonColor={liste.buttonColor} />)
 
  return (
    <div className="app">
      {varelister}
    </div>
  )
}

export default App;
