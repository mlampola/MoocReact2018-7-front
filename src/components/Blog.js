import React from 'react'
import TogglableItem from './TogglableItem'
import { Table, Button } from 'semantic-ui-react'

const Blog = ({ blog, likeHandler, deleteHandler, loggedInUser }) => {
  const showWhenVisible = { display: blog.user ? (loggedInUser.username === blog.user.username ? '' : 'none') : '' }

  return (
    <div>
      <TogglableItem clickableText={`${blog.title} by ${blog.author}`}>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{blog.likes} likes &nbsp;
                <Button compact color='pink' id={blog.id} onClick={likeHandler}>Like</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{blog.user ? 'Added by ' + blog.user.name : ''}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div style={showWhenVisible}>
          <Table>
            <Table.Body>
              <Table.Row style={showWhenVisible}>
                <Table.Cell>
                  <Button negative id={blog.id} onClick={deleteHandler}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </TogglableItem>
    </div>
  )
}

export default Blog