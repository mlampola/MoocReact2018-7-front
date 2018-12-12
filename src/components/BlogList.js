import React from 'react'
import Blog from './Blog'
import { Table } from 'semantic-ui-react'

const BlogList = ({ blogs, likeHandler, deleteHandler, loggedInUser }) => {
  return (
    <div>
      <Table striped celled>
        <Table.Body>
          {blogs
            .sort((a, b) => b.likes - a.likes)
            .map(blog =>
              <Table.Row key={blog.id}>
                <Table.Cell>
                  <Blog
                    blog={blog}
                    likeHandler={likeHandler}
                    deleteHandler={deleteHandler}
                    loggedInUser={loggedInUser} />
                </Table.Cell>
              </Table.Row>
            )}
        </Table.Body>
      </Table>
    </div>)
}

export default BlogList