import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserBlogsPage from './UserBlogsPage'
import RestrictedPage from './RestrictedPage'
import UserStat from './UserStat'
import HomePage from './HomePage'
import { connect } from 'react-redux'

class UserStats extends React.Component {

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/blogs" render={() => <HomePage />} />
          <Route exact path='/users' render={() => <UserStat details={this.props.details} />} />
          <Route exact path="/users/:id" render={({ match }) =>
            <UserBlogsPage blogUser={this.userById(match.params.id)} />}
          />
        </div>
      </Router>
    )
  }
}

UserStats.propTypes = {
  details: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps
)(UserStats)