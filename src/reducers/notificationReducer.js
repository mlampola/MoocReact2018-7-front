const reducer = (store = null, action) => {
  if (action.type === 'NOTIFICATION') {
    return { message: action.notification, messageStyle: action.notificationType}
  }
  if (action.type === 'RESET') {
    return null
  }

  return store
}

export const notify = (notification, notificationType, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFICATION',
      notification,
      notificationType
    })
    setTimeout(() => {
      dispatch(notificationReset())
    }, seconds * 1000)
  }
}

const notificationReset = () => {
  return {
    type: 'RESET'
  }
}

export default reducer