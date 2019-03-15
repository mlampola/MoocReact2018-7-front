import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Link } from 'react-router-dom'
import RestrictedPage from './RestrictedPage'

class UserBlogPage extends React.Component {

  blogById = (id) => {
    return this.props.blogUser.blogs.find(blog => blog._id === id)
  }

  render() {
    console.log('User blog: ', this.props)
    return (
      <div>
        <RestrictedPage>
          {(!this.props.blogUser || !this.props.blogUser.blogs) ? null :
            <div>
              <h2>{'Blogs added by'}<br />{`${this.props.blogUser.name}`} </h2>
              <ul>
                {this.props.blogUser.blogs.map(blog =>
                  <li key={blog._id}>
                    <p>{`${blog.title} by ${blog.author}`}</p>
{/*                     <Link to={`/users/${this.props.blogUser.id}/blogs/${blog._id}`}>{`${blog.title} by ${blog.author}`}</Link>
 */}                  </li>)
                }
              </ul>
            </div>}
        </RestrictedPage>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    details: state.details,
    notification: state.notification,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps
)(UserBlogPage)