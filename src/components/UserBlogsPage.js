import React from 'react'
import RestrictedPage from './RestrictedPage'
import { connect } from 'react-redux'

class UserBlogsPage extends React.Component {

  render() {
    return (
      <div>
        <RestrictedPage>
          <h2>Added blogs</h2>
          <ul>
            {(!this.props.blogUser || !this.props.blogUser.blogs) ? null :
              this.props.blogUser.blogs.map(blog =>
                <li key={blog._id}>
                  <a href={`/blogs/${blog._id}`}>{`${blog.title} by ${blog.author}`}</a>
                </li>
              )
            }
          </ul>
        </RestrictedPage>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    details: state.details,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(UserBlogsPage)