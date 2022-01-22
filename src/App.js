import React from 'react'
import Popup from './Popup'
import List from './List'
import db from './firebase'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     lister: [],
     inputvalue: '',
     radiovalue: '',
     toggleNyListe: false
    }
    this.toggleNewList = this.toggleNewList.bind(this)
    this.opprettListe = this.opprettListe.bind(this)
    this.slettListe = this.slettListe.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
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

  handleInputChange(value) {
    this.setState({inputvalue: value})
  }

  handleRadioChange(value) {
    this.setState({radiovalue: value})
  }

  opprettListe() {
    this.setState({toggleNyListe: !this.state.toggleNyListe})

    const rgb = "rgb("+this.state.radiovalue+")"
    const rgba = "rgba("+this.state.radiovalue+",0.5)"
    const tittel = this.state.inputvalue
    const id = '' +Math.random()
    console.log(rgb);
    console.log(rgba);
    console.log(tittel);
    console.log(id);

    const dataRef = collection(db, "lister")
    addDoc(dataRef, {buttonColor: rgb, color: rgba, state: id, tittel: tittel})

    this.setState({inputvalue: ''})
    this.setState({radiovalue: ''})
  }

  slettListe(id, tittel) {
    const text1 = 'Er du sikker på at du vil slette'
    const tekst = text1.concat(" ", tittel, "?");


    var result = window.confirm(tekst);
     if(result){
       const ref = doc(db, "lister", id)
        deleteDoc(ref)
     }


  }

  render() {
    const varelister = this.state.lister.map(liste => <List key={liste.id} tittel={liste.tittel} saveState={liste.state} color={liste.color} buttonColor={liste.buttonColor} listeId={liste.id} slettListe={this.slettListe} />)
    const popup = this.state.toggleNyListe ? <Popup opprettListe={this.opprettListe} value={this.state.inputvalue} handleInputChange={this.handleInputChange} handleRadioChange={this.handleRadioChange} /> : null
    const nyListe = this.state.toggleNyListe ? null : <button className="btn btn-light ny-liste" onClick={this.toggleNewList}>Ny liste</button>
    return (
      <div className="app">
        {nyListe}
        {popup }
        {varelister}
      </div>
    )
  }
}

export default App;
