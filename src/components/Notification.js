import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notify } from '../reducers/notificationReducer'

class Notification extends React.Component {
  render() {
    const { notification, messageStyle } = this.props
    return (
      notification === null ? null : (
        notification.messageStyle !== messageStyle ? null :
          <div className={notification.messageStyle}>
            {notification.message}
          </div>
      )
    )
  }
}

Notification.propTypes = {
  messageStyle: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps,
  { notify }
)(Notification)

export default ConnectedNotification