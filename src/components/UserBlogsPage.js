import React from 'react'
import RestrictedPage from './RestrictedPage'
import BlogDetails from './BlogDetails'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class UserBlogsPage extends React.Component {

  blogById = (id) => {
    return this.props.blogs.find(blog => blog.id === id)
  }

  render() {
    console.log('User blogs: ', this.props)
    return (
      <div>
        <RestrictedPage>
          {(!this.props.blogUser || !this.props.blogUser.blogs) ? null :
            <div>
              <h2>{'Blogs added by'}<br/>{`${this.props.blogUser.name}`} </h2>
              <ul>
                {this.props.blogUser.blogs.map(blog =>
                  <li key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>{`${blog.title} by ${blog.author}`}</Link>
                  </li>)
                }
              </ul>
            </div>}
          <Router>
            <div>
              <Route exact path="/blogs/:id" render={({ match }) => {
                console.log(match)
                return(<BlogDetails blog={this.blogById(match.params.id)} />)}}
              />
            </div>
          </Router>
        </RestrictedPage>
      </div>)
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
)(UserBlogsPage)