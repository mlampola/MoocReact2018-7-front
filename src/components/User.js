import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

class User extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { loggedInUser, logoutHandler } = this.props
    const { activeItem } = this.state

    return (
      !loggedInUser ? null :
        <div>
          <Menu>
            <Menu.Item name='blogs' active={activeItem === 'blogs'} onClick={this.handleItemClick}>
              <Link to="/">Blogs</Link>
            </Menu.Item>

            <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
              <Link to="/users">Users</Link>
            </Menu.Item>

            <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
              {loggedInUser.name} logged in
            </Menu.Item>

            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={logoutHandler}>
              <Button negative onClick={logoutHandler}>Logout</Button>
            </Menu.Item>
          </Menu>
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