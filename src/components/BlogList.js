import React from 'react'
import PropTypes from 'prop-types'
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

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  likeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

export default BlogList