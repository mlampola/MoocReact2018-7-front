import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomePage from './components/HomePage'
import UserStats from './components/UserStats'

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
      <Container>
        <Router>
          <div>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/users" render={() => <UserStats details={this.props.details} />} />
          </div>
        </Router>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  { blogInitialization, getStoredUser, userDetailsInitialization }
)(App)