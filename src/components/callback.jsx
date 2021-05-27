import React, { Component } from 'react'
import Auth from '../auth'

class Callback extends Component {
  componentDidMount() {
    this.props.auth.handleAuthentication()
  }

  render() {
    return (
      <div>
        <p>Hi {this.props.name} Callback page</p>
      </div>
    )
  }
}

export default Callback
