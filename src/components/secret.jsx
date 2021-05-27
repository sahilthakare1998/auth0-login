import React, { Component } from 'react'

class Secret extends Component {
  onLogoutClick = () => {
    this.props.auth.logout()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.auth.logout}>logout </button>
        {/* <a
          href='https://tenant-name.auth0.com/v2/logout'
          onClick={this.props.auth.logout}
        >
          {' '}
          <i className='fa fa-sign-out fa-fw' /> Logout{' '}
        </a> */}
        <p> secret</p>
      </div>
    )
  }
}

export default Secret
