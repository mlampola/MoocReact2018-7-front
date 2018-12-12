import React from 'react'
import Notification from './Notification'

const BlogForm = ({ blog, submitHandler, fieldChangeHandler }) => {
  return (
    <div>
      <h2>Create blog</h2>
      <Notification messageStyle='message' />

      <form onSubmit={submitHandler}>
        <div>
          Title
        <input
            name="title"
            value={blog.title}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          Author
        <input
            name="author"
            value={blog.author}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          URL
        <input
            name="url"
            value={blog.url}
            onChange={fieldChangeHandler}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default BlogForm