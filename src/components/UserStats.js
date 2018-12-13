import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

const UserStats = ({ details }) => {
  return (
    <div>
      <Table unstackable striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Blogs added</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {details
            .sort((a, b) => b.likes - a.likes)
            .map(user =>
              <Table.Row key={user.id}>
                <Table.Cell>
                  <a href={`/users/${user.id}`}>{user.name}</a>
                </Table.Cell>
                <Table.Cell>
                  {user.blogs ? user.blogs.length : 0}
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
    </div>)
}

UserStats.propTypes = {
  details: PropTypes.array.isRequired
}

export default UserStats