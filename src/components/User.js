import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component {
  render() {
    const { loggedInUser, logoutHandler } = this.props
    return (
      !loggedInUser ? null :
        <p>{loggedInUser.name} logged in &nbsp;
        <button onClick={logoutHandler}>Logout</button>
        </p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const ConnectedUser = connect(
  mapStateToProps
)(User)

export default ConnectedUser