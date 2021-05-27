# login-auth0

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/login-auth0.svg)](https://www.npmjs.com/package/login-auth0) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save login-auth0
```

## Usage

```jsx
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
      DOMAIN={'********'}
      clientID={'**********'}
      getProfileDetails = {getProfileDetails}
      isAuthenticated = {isAuthenticated}

    />
  )
}

export default App

```

## License

MIT © [sahilthakare](https://github.com/sahilthakare1998)
