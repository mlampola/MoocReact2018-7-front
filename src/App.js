import React from 'react'
import './index.css'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'

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

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/users" render={() => <UserPage />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(
  null,
  { blogInitialization, getStoredUser, userDetailsInitialization }
)(App)