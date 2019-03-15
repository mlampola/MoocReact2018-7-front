import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import RestrictedPage from './RestrictedPage'
import { connect } from 'react-redux'

class UserStats extends React.Component {

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  render() {
    return (
      <RestrictedPage>
        <div>
          <h2>Users</h2>
          <Table unstackable striped celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Blogs added</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.details
                .sort((a, b) => b.likes - a.likes)
                .map(user =>
                  <Table.Row key={user.id}>
                    <Table.Cell>
                      <Link to={`/users/${user.id}/blogs`}>{user.name}</Link>
                    </Table.Cell>
                    <Table.Cell>
                      {user.blogs ? user.blogs.length : 0}
                    </Table.Cell>
                  </Table.Row>
                )
              }
            </Table.Body>
          </Table>
        </div>
      </RestrictedPage>)
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