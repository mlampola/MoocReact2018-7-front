import React from 'react'
import PropTypes from 'prop-types'
import Notification from './Notification'
import { Form, Container } from 'semantic-ui-react'

const BlogForm = ({ blog, submitHandler, fieldChangeHandler }) => {
  return (
    <div>
      <h2>Create blog</h2>
      <Notification messageStyle='message' />

      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Input
            label='Title'
            name="title"
            value={blog.title}
            onChange={fieldChangeHandler} />
          <Form.Input
            label='Author'
            name="author"
            value={blog.author}
            onChange={fieldChangeHandler} />
          <Form.Input
            label='URL'
            name="url"
            value={blog.url}
            onChange={fieldChangeHandler} />
          <Form.Button positive type="submit">Create</Form.Button>
        </Form>
      </Container>
    </div >
  )
}

BlogForm.propTypes = {
  blog: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired, 
  fieldChangeHandler: PropTypes.func.isRequired
}

export default BlogForm