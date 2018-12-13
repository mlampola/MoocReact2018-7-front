import React from 'react'
import PropTypes from 'prop-types'
import RestrictedPage from './RestrictedPage'
import UserStats from './UserStats'

import { connect } from 'react-redux'

class UserPage extends React.Component {

  render() {
    return (
      <RestrictedPage>
        <div className="blogs">
          <h2>Users</h2>
          <UserStats details={this.props.details} />
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
    details: state.details
  }
}

export default connect(
  mapStateToProps
)(UserPage)