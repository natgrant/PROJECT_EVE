import React from 'react'
import { getEmail } from '../api/index'

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breach: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
  }

  handleChange(event) {
    this.setState({
      breach: [event.target.value]
    })
  }
  clickHandle() {
    return getEmail(this.state.breach)
      .then(res => this.setState({ breach: res }))
  }

  render() {
    return (
      <div>
        <form onSubmit={event => event.preventDefault()}>
          <label><input type="text" email="text" onChange={this.handleChange} /></label>
          <button onClick={this.clickHandle}>Submit</button>
        </form>

        <ul>{this.state.breach.map(obj => obj.Domain)}</ul>

      </div>
    )
  }

}