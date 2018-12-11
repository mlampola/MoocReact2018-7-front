import React from 'react'

const UserStats = ({ details }) => {
  return (
    <div>
      <table>
        <thead style={{textAlign: 'left'}}>
          <tr>
            <th>User</th>
            <th>Blogs added</th>
          </tr>
        </thead>
        <tbody>
          {details
            .sort((a, b) => b.likes - a.likes)
            .map(user =>
              <tr key={user.id}>
                <td>
                  <a href={`/users/${user.id}`}>{user.name}</a>
                </td>
                <td>
                  {user.blogs ? user.blogs.length : 0}
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>)
}

export default UserStats