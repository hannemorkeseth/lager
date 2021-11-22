import React from 'react'
//import lister from './lister'
import List from './List'
import db from './firebase'
import { collection, getDocs } from 'firebase/firestore'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     lister: []
    }
  }

  async componentDidMount() {
    const listerRef = collection(db, "lister")
    const data = await getDocs(listerRef)
    this.setState({lister: data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))})
    console.log(this.state);
  }

  render() {
    const varelister = this.state.lister.map(liste => <List key={liste.id} tittel={liste.tittel} saveState={liste.state} color={liste.color} buttonColor={liste.buttonColor} />)
    return (
      <div className="app">
        {varelister}
      </div>
    )
  }
}

export default App;
