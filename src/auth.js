import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode'
export const LOGIN_SUCCESS_PAGE = '/secret'
export const LOGIN_FAILURE_PAGE = '/'
export default class Auth {
  constructor(domain, redirectUri, clientID, audience, responseType, scope) {
    this.auth0 = new auth0.WebAuth({
      domain: domain,
      redirectUri: redirectUri,
      clientID: clientID,
      audience: audience,
      responseType: responseType,
      scope: scope
    })
  }
  // auth0 = new auth0.WebAuth({
  //   domain: '',
  //   clientID: 'YY9czfhjPnN6U3fPnGQAPVuCJMg3EkcE',
  //   audience: 'https://sahil-1.us.auth0.com/userinfo',
  //   responseType: 'token id_token',
  //   scope: 'openid profile'
  // })

  login = () => {
    this.auth0.authorize({
      redirectUri: 'http://localhost:3000/callback'
    })
  }

  /* eslint no-restricted-globals :0 */

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt =
          JSON.stringify(authResults.expiresIn) * 1000 + new Date().getTime()
        localStorage.setItem('access_token', authResults.accessToken)
        localStorage.setItem('id_token', authResults.idToken)
        localStorage.setItem('expires_at', expiresAt)
        location.hash = ''
        location.pathname = LOGIN_SUCCESS_PAGE
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE
        console.log(err)
      }
    })
  }

  isAuthenticated = () => {
    if (
      localStorage.getItem('access_token') &&
      localStorage.getItem('id_token')
    ) {
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
      return new Date().getTime() < expiresAt
    } else {
      return false
    }
  }

  logout = () => {
    sessionStorage.clear()
    this.auth0.logout()
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
  }

  getProfile() {
    if (localStorage.getItem('id_token')) {
      return jwtDecode(localStorage.getItem('id_token'))
    } else {
      return {}
    }
  }
}
