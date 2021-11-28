import React from 'react'
import Popup from './Popup'
import List from './List'
import db from './firebase'
import { collection, getDocs } from 'firebase/firestore'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     lister: [],
     toggleNyListe: false
    }
    this.toggleNewList = this.toggleNewList.bind(this)
    this.opprettListe = this.opprettListe.bind(this)
  }

  async componentDidMount() {
    const listerRef = collection(db, "lister")
    const data = await getDocs(listerRef)
    this.setState({lister: data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))})
  }

  toggleNewList() {
    this.setState({toggleNyListe: !this.state.toggleNyListe})
  }

  opprettListe() {
    this.setState({toggleNyListe: !this.state.toggleNyListe})
  }

  render() {
    const varelister = this.state.lister.map(liste => <List key={liste.id} tittel={liste.tittel} saveState={liste.state} color={liste.color} buttonColor={liste.buttonColor} />)
    const popup = this.state.toggleNyListe ? <Popup opprettListe={this.oprettListe} /> : null
    const nyListe = this.state.toggleNyListe ? null : <button className="btn btn-light ny-liste" onClick={this.toggleNewList}>Ny liste</button>
    return (
      <div className="app">
        {nyListe}
        {popup}
        {varelister}
      </div>
    )
  }
}

export default App;
