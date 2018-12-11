import React from 'react'

import LoginForm from './LoginForm'
import User from './User'
import UserStats from './UserStats'

import { connect } from 'react-redux'
import { login, logout } from '../reducers/userReducer'

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  login = (event) => {
    event.preventDefault()
    try {
      this.props.login(this.state.username, this.state.password)
      this.setState({ username: '', password: '' })
    } catch (exception) {
      console.log(exception)
      this.props.notify('Wrong username or password', 'error', 5)
    }
  }

  logout = (event) => {
    event.preventDefault()
    this.props.logout()
    this.setState({ username: '', password: '' })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      this.props.user === null ?
        <div className="login">
          <LoginForm username={this.state.username}
            password={this.state.password}
            loginHandler={this.login}
            fieldChangeHandler={this.handleLoginFieldChange}
            message={this.props.notification ? this.props.notification.message : null} />
        </div>
        :
        <div className="blogs">
          <h2>Users</h2>
          <User loggedInUser={this.props.user} logoutHandler={this.logout} />
          <p></p>
          <UserStats details={this.props.details} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    details: state.details,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { login, logout }
)(UserPage)