import React from "react"
import ListItem from './ListItem'
import InputField from './InputField'


class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      inputvalue: '',
      loading: false
    }
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
    this.getStateFromLocalStorage = this.getStateFromLocalStorage.bind(this)
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  saveStateToLocalStorage(event) {


    localStorage.setItem(this.props.saveState, JSON.stringify(this.state.data))
    const tittel = this.props.tittel
    alert("Lagret liste: " + tittel)
  }

  getStateFromLocalStorage() {
    this.setState(() => {
      const data = localStorage.getItem(this.props.saveState)
      if (data !== null) {
        return {
          data: JSON.parse(data),
          loading: false
        }
      }
    })
  }

  componentDidMount() {
    this.setState({loading: true})
    this.getStateFromLocalStorage()
  }

  handlePlusClick(id) {
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

  handleMinusClick(id) {
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

  handleDelete(id) {
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

  addItem(item) {
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
        <button onClick={this.saveStateToLocalStorage} className="lagre" style={{backgroundColor: this.props.buttonColor}}>Lagre</button>
      </div>
    )
  }
}

export default List
