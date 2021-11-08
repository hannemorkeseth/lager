import React from 'react'

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.props.handleInputChange(event.target.value)
  }

  handleClick() {
    this.props.addItem(this.props.value)
  }

  render() {
    return (
      <div className="input-container">
        <input type="text" className="text-field" placeholder="Vare" value={this.props.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick} className="input-btn">Legg til</button>
      </div>
    )}
}

export default InputField
