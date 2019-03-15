import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserBlogPage from './UserBlogPage'
import UserStat from './UserStat'
import HomePage from './HomePage'
import BlogDetails from './BlogDetails'

class UserBlogsPage extends React.Component {

  userById = (id) => {
    return this.props.details.find(user => user.id === id)
  }

  blogById = (id) => {
    return this.props.blogUser.blogs.find(blog => blog._id === id)
  }

  render() {
    console.log('User blogs router: ', this.props)
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/users" render={() => <UserStat details={this.props.details} />} />
          <Route exact path="/users/:id/blogs" render={({ match }) =>
            <UserBlogPage blogUser={this.userById(match.params.id)} />}
          />
{/*           <Route exact path="/users/:uid/blogs" render={() =>
            <UserBlogPage blogUser={this.props.blogUser} />
          }
          />
 */}          <Route exact path="/users/:uid/blogs/:bid" render={({ match }) =>
            <BlogDetails blog={this.blogById(match.params.bid)} />
          }
          />
        </div>
      </Router>)
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