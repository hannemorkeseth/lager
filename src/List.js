import React from "react"
import ListItem from './ListItem'
import InputField from './InputField'
import db from './firebase'
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      inputvalue: '',
      loading: false
    }

    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  async componentDidMount() {
    this.setState({loading: true})
    const dataRef = collection(db, this.props.saveState)
    const data = await getDocs(dataRef)
    this.setState({data: data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))})
      this.setState({loading: false})
  }

  async handlePlusClick(id, antall) {
    const ref = doc(db, this.props.saveState, id)
    const increased = {antall: antall + 1}
    await updateDoc(ref, increased)

    this.setState(prevState => {
    const newData = prevState.data.map(vare => {
      if (vare.id === id) {
        return {
          ...vare,
          antall: vare.antall + 1
        }
      }
        return vare
      })
      return {
        data: newData
      }
     })
  }

  handleMinusClick(id, antall) {
    const ref = doc(db, this.props.saveState, id)
    const decreased = {antall: antall - 1}
    updateDoc(ref, decreased)

    this.setState(prevState => {
    const newData = prevState.data.map(vare => {
      if (vare.id === id) {
        return {
          ...vare,
          antall: vare.antall - 1
        }
      }
        return vare
      })
      return {
        data: newData
      }
     })
  }

  async handleDelete(id) {
    const ref = doc(db, this.props.saveState, id)
    await deleteDoc(ref)

    this.setState(prevState => {
      const filteredData = prevState.data.filter(vare => {
      if (vare.id !== id) {
        return vare
      }
      })
      return {
        data: filteredData
      }
    })
  }

  handleInputChange(value) {
    this.setState({inputvalue: value})
  }

  async addItem(item) {
    const dataRef = collection(db, this.props.saveState)
    await addDoc(dataRef, {vare: item, antall: 1})
    this.setState(prevState => ({
      data: [...prevState.data,
            {vare: item, antall: 1, id: item}]
      })
    )
    this.setState({inputvalue: ''})
  }

  render() {
    const varer = this.state.data.map((vare, index) => <ListItem
      key={`${index}`}
      vare={vare}
      handlePlusClick={this.handlePlusClick}
      handleMinusClick={this.handleMinusClick}
      handleDelete={this.handleDelete}
      buttonColor={this.props.buttonColor} />)
      const loading = this.state.loading ? "Loading..." : null
    return (
      <div className="list" style={{backgroundColor: this.props.color}}>
        <h1 className="overskrift">{this.props.tittel}</h1>
        {loading}
        {varer}
        <InputField value={this.state.inputvalue} handleInputChange={this.handleInputChange} addItem={this.addItem} buttonColor={this.props.buttonColor}/>
      </div>
    )
  }
}

export default List
