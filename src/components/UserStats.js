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
            .map(userDetail =>
              <tr key={userDetail.id}>
                <td>
                  {userDetail.name}
                </td>
                <td>
                  {userDetail.blogs ? userDetail.blogs.length : 0}
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>)
}

export default UserStats