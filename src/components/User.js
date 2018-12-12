import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class User extends React.Component {
  render() {
    const { loggedInUser, logoutHandler } = this.props
    return (
      !loggedInUser ? null :
        <div>
          <Link to="/">Blogs</Link> &nbsp;
          <Link to="/users">Users</Link> &nbsp;
          {loggedInUser.name} logged in &nbsp;
          <button onClick={logoutHandler}>Logout</button>
        </div>
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