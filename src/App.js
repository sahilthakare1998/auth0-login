import React, { Component } from 'react'
import Main from './components/main'
import Secret from './components/secret'
import Callback from './components/callback'

class App extends Component {
  render() {
    console.log(this.props.location)
    let mainComponent = ''
    switch (this.props.location) {
      case '/':
        mainComponent = <Main {...this.props} />
        break
      case this.props.LOGIN_SUCCESS_PAGE:
        mainComponent = this.props.auth.isAuthenticated() ? (
          <Secret {...this.props} />
        ) : (
          <Main {...this.props} />
        )
        break
      case this.props.CALLBACK_URL:
        mainComponent = <Callback {...this.props} />
        break
      default:
        mainComponent = <Main {...this.props} />
    }
    return <div>{mainComponent}</div>
  }
}

export default App
