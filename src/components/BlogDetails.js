import React from 'react'
import RestrictedPage from './RestrictedPage'
import { connect } from 'react-redux'
import { blogLike } from '../reducers/blogReducer'
import { Button } from 'semantic-ui-react'

class BlogDetails extends React.Component {

  like = (event) => {
    this.props.blogLike(event.target.id)
  }

  render() {
    const { blog } = this.props
    return (
      <div>
        {!blog ? null :
          <RestrictedPage>
            <h2>{`${blog.title} by ${blog.author}`}</h2>
            <table>
              <tbody>
                <tr><td width="10"></td><td><a href={blog.url}>{blog.url}</a></td></tr>
                <tr><td></td>
                  <td>{blog.likes} likes &nbsp;
                    <Button compact color='pink' id={blog.id} onClick={this.like}>Like</Button>
                  </td></tr>
                <tr><td></td><td>{blog.user ? 'added by ' + blog.user.name : ''}</td></tr>
              </tbody>
            </table>
          </RestrictedPage>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { blogLike }
)(BlogDetails)