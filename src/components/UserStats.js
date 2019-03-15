import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserBlogsPage from './UserBlogsPage'
import UserStat from './UserStat'
import HomePage from './HomePage'
import { connect } from 'react-redux'

class UserStats extends React.Component {

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  render() {
    console.log('User stats router: ', this.props)
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/users" render={() => <UserStat details={this.props.details} />} />
          <Route exact path="/users/:id/blogs" render={({ match }) =>
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