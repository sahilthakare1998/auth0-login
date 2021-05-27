import React, { useEffect } from 'react'

import LoginComponent from 'login-auth0'
import 'login-auth0/dist/index.css'

const App = () => {


  function getProfileDetails(value){
      console.log('getProfileDetails',value)
  } 
  
  function isAuthenticated(value){
    console.log('isAuthenticated',value)
} 

  
  return (
    <LoginComponent
      BASE_URL={'http://localhost:3000'}
      LOGIN_FAILURE_PAGE={'/'}
      LOGIN_SUCCESS_PAGE={'/secret'}
      CALLBACK_URL={'/callback'}
      DOMAIN={'sahil-1.us.auth0.com'}
      clientID={'YY9czfhjPnN6U3fPnGQAPVuCJMg3EkcE'}
      getProfileDetails = {getProfileDetails}
      isAuthenticated = {isAuthenticated}

    />
  )
}

export default App
