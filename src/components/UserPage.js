import React from 'react'
import PropTypes from 'prop-types'
import RestrictedPage from './RestrictedPage'
import UserStats from './UserStats'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

class UserPage extends React.Component {

  render() {
    return (
      <RestrictedPage>
        <div className="blogs">
          <h2>Users</h2>
          <Router>
            <div>
              <Route exact path='/users' render={() => <UserStats details={this.props.details} />} />
            </div>
          </Router>
        </div>
      </RestrictedPage>
    )
  }
}

UserPage.propTypes = {
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
)(UserPage)