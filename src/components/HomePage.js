import React from 'react'

import LoginForm from './LoginForm'
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import Notification from './Notification'
import User from './User'

import blogService from '../services/blogs'

import { connect } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
import { blogInitialization, blogLike, blogCreation, blogDeletion } from '../reducers/blogReducer'
import { login, logout, getStoredUser } from '../reducers/userReducer'

class HomePage extends React.Component {
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

  like = async (event) => {
    this.props.blogLike(event.target.id)
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

  deleteBlog = async (event) => {
    const blog = await blogService.getById(event.target.id)
    if (blog) {
      try {
        if (window.confirm(`Delete '${blog.title}' by ${blog.author}?`)) {
          this.props.blogDeletion(blog.id)
        }
      }
      catch (error) {
        this.props.notify(error.message, 'error', 5)
      }
    }
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
        <div className="blogs">
          <h2>Blogs</h2>
          <User loggedInUser={this.props.user} logoutHandler={this.logout} />
          <Notification messageStyle='error' />
          <Togglable buttonLabel="Create new...">
            <BlogForm blog={{
              title: this.state.title,
              author: this.state.author,
              url: this.state.url
            }}
              submitHandler={this.addBlog}
              fieldChangeHandler={this.handleBlogFieldChange}
              message={this.props.notification ? this.props.notification.message : null} />
          </Togglable>
          <p></p>
          <BlogList blogs={this.props.blogs}
            likeHandler={this.like}
            deleteHandler={this.deleteBlog}
            loggedInUser={this.props.user} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { notify, blogInitialization, blogLike, blogCreation, blogDeletion, login, logout, getStoredUser }
)(HomePage)