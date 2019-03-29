import React from 'react'
import PropTypes from 'prop-types'

import BlogList from './BlogList'

import blogService from '../services/blogs'

import { connect } from 'react-redux'
import { blogLike, blogDeletion } from '../reducers/blogReducer'

class HomePage extends React.Component {

  like = async (event) => {
    this.props.blogLike(event.target.id)
  }

  deleteBlog = async (event) => {
    const blog = await blogService.getById(event.target.id)
    if (blog) {
      try {
        if (window.confirm(`Delete '${blog.title}' by ${blog.author}?`)) {
          this.props.blogDeletion(blog.id)
        }
      }
      catch (error) {
        this.props.notify(error.message, 'error', 5)
      }
    }
  }

  render() {
    return (
      <div className="blogs">
        <h2>Blogs</h2>
        <BlogList blogs={this.props.blogs}
          likeHandler={this.like}
          deleteHandler={this.deleteBlog}
          loggedInUser={this.props.user} />
      </div>
    )
  }
}

HomePage.propTypes = {
  blogs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { blogLike, blogDeletion }
)(HomePage)