import React from 'react'

import LoginForm from './LoginForm'
import User from './User'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import Notification from './Notification'

import { connect } from 'react-redux'
import { login, logout } from '../reducers/userReducer'
import { notify } from '../reducers/notificationReducer'
import { blogCreation } from '../reducers/blogReducer'

class RestrictedPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      title: '',
      author: '',
      url: ''
    }
  }

  login = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  logout = (event) => {
    event.preventDefault()
    this.props.logout()
    this.setState({ username: '', password: '' })
  }

  addBlog = (event) => {
    event.preventDefault()
    const newBlog = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    }

    this.props.blogCreation(newBlog)
    this.props.notify(`A new blog '${newBlog.title}' by ${newBlog.author} added`, 'message', 5)

    this.setState({
      title: '',
      author: '',
      url: ''
    })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBlogFieldChange = (event) => {
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
        <div>
          <h1>Blog App</h1>
          <User loggedInUser={this.props.user} logoutHandler={this.logout} />
          <p></p>
          <Notification messageStyle='error' />
          <Togglable buttonLabel="Create blog...">
            <BlogForm blog={{
              title: this.state.title,
              author: this.state.author,
              url: this.state.url
            }}
            submitHandler={this.addBlog}
            fieldChangeHandler={this.handleBlogFieldChange}
            message={this.props.notification ? this.props.notification.message : null} />
          </Togglable>
          {this.props.children}
        </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { login, logout, blogCreation, notify }
)(RestrictedPage)