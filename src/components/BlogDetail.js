import React from 'react'
import { connect } from 'react-redux'
import { blogLike } from '../reducers/blogReducer'
import { Button } from 'semantic-ui-react'

class BlogDetail extends React.Component {

  like = (event) => {
    this.props.blogLike(event.target.id)
  }

  render() {
    console.log('Blog detail: ', this.props)
    const { blog } = this.props
    return (
      <div>
        {!blog ? null :
          <div>
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
          </div>
        }
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
)(BlogDetail)