import React from 'react'
import lister from './lister'
import List from './List'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lister
    }
  }

  render() {
    const varelister = this.state.lister.map(liste => <List key={liste.id} tittel={liste.tittel} saveState={liste.state} />)
    return (
      <div>
        {varelister}
      </div>
    )
  }
}

export default App;
