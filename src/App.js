import React from 'react'
import ListItem from './ListItem'
import InputField from './InputField'
import data from './data'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      inputvalue: ''
    }
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
    this.getStateFromLocalStorage = this.getStateFromLocalStorage.bind(this)
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  saveStateToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.state.data))
  }

  getStateFromLocalStorage() {
    this.setState(() => {
      const data = localStorage.getItem('state')
      console.log(data);
      return {
        data: JSON.parse(data)
      }

    })
  }

  componentDidMount() {
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
      handleDelete={this.handleDelete} />)
    return (
      <div>
        {varer}
        <InputField value={this.state.inputvalue} handleInputChange={this.handleInputChange} addItem={this.addItem}/>
        <button onClick={this.saveStateToLocalStorage}>Lagre</button>
      </div>
    )
  }
}

export default App;
