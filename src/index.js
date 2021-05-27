import React, { Component } from 'react'
import App from './App'
import Auth from './auth'

/* eslint no-restricted-globals :0 */

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    const auth = new Auth(
      this.props.DOMAIN,
      this.props.BASE_URL + this.props.CALLBACK_URL,
      this.props.clientID,
      `https://${this.props.DOMAIN}/userinfo`,
      'token id_token',
      'openid profile'
    )

    const profileDetails = auth.getProfile().name || 'JOHN DOE'
    this.state = {
      name: 'JOHN DOE',
      //  location:location.pathname.replace(/^\/?|\/$/g,"")
      location: location.pathname,
      auth,
      profileDetails,
      LOGIN_FAILURE_PAGE: this.props.LOGIN_FAILURE_PAGE,
      LOGIN_SUCCESS_PAGE: this.props.LOGIN_SUCCESS_PAGE,
      CALLBACK_URL: this.props.CALLBACK_URL,
      BASE_URL: this.props.BASE_URL
    }
  }

  componentDidMount() {
    this.getProfileDetails()
    this.isAuthenticated()
  }

  getProfileDetails = () => {
    this.props.getProfileDetails(this.state.auth.getProfile())
  }

  login = () => {
    this.state.auth.login()
  }

  logout = () => {
    this.state.auth.logout()
  }

  isAuthenticated = () => {
    return this.props.isAuthenticated(this.state.auth.isAuthenticated())
  }

  render() {
    return <App {...this.state} />
  }
}

export default LoginComponent
