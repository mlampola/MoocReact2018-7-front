import React from 'react'
import './index.css'
import { Route, withRouter } from 'react-router-dom'

import RestrictedPage from './components/RestrictedPage'
import HomePage from './components/HomePage'
import UserStat from './components/UserStat'
import UserBlogPage from './components/UserBlogPage'
import BlogDetail from './components/BlogDetail'

import { connect } from 'react-redux'
import { blogInitialization } from './reducers/blogReducer'
import { getStoredUser } from './reducers/userReducer'
import { userDetailsInitialization } from './reducers/userDetailReducer'


class App extends React.Component {
  componentDidMount() {
    this.props.blogInitialization()
    this.props.getStoredUser()
    this.props.userDetailsInitialization()
  }

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  blogById = (id) => {
    return this.props.blogs.find(blog => blog.id === id)
  }

  render() {
    return (
      <RestrictedPage>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/users" render={() => <UserStat />} />
        <Route path="/users/:id/blogs" render={({ match }) =>
          <UserBlogPage blogUser={this.userById(match.params.id)} />}
        />
        <Route path="/blogs/:id" render={({ match }) =>
          <BlogDetail blog={this.blogById(match.params.id)} />
        }
        />
      </RestrictedPage>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
    blogs: state.blogs
  }
}

export default withRouter(connect(
  mapStateToProps,
  { blogInitialization, getStoredUser, userDetailsInitialization }
)(App))