import React from 'react'
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

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}

export default connect(
  mapStateToProps
)(UserPage)