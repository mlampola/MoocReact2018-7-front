import React from 'react'
import { connect } from 'react-redux'
import { blogLike } from '../reducers/blogReducer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomePage from './HomePage'
import UserStat from './UserStat'
import BlogDetail from './BlogDetail'

class BlogDetails extends React.Component {

  blogById = (id) => {
    return this.props.blogs.find(blog => blog.id === id)
  }

  render() {
    console.log('Blog details router: ', this.props)
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/users" render={() => <UserStat details={this.props.details} />} />
          <Route exact path="/users/:uid/blogs/:bid" render={({ match }) =>
            <BlogDetail blog={this.blogById(match.params.bid)} />}
          />
        </div>
      </Router>
    )
  }
}

BlogDetails.propTypes = {
  blogs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  { blogLike }
)(BlogDetails)