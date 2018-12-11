import React from 'react'
import './index.css'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserBlogsPage from './components/UserBlogsPage'

import { connect } from 'react-redux'
import { blogInitialization } from './reducers/blogReducer'
import { getStoredUser } from './reducers/userReducer'
import { userDetailsInitialization } from './reducers/userDetailReducer'

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.blogInitialization()
    this.props.getStoredUser()
    this.props.userDetailsInitialization()
  }

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/users" render={() => <UserPage />} />
            <Route exact path="/users/:id" render={({ match }) =>
              <UserBlogsPage blogUser={this.userById(match.params.id)} />}
            />
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}

export default connect(
  mapStateToProps,
  { blogInitialization, getStoredUser, userDetailsInitialization }
)(App)