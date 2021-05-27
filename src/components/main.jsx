import React, { Component } from 'react'

class Main extends Component {
  render() {
    return <button onClick={this.props.auth.login}>login </button>
  }
}

export default Main
