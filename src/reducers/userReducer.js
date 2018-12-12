import blogService from '../services/blogs'
import loginService from '../services/login'

const USER_STORAGE_NAME = 'loggedInBlogUser'

const reducer = (store = null, action) => {
  if (action.type === 'LOGIN') {
    return { name: action.user.name, username: action.user.username, token: action.user.token }
  }
  if (action.type === 'LOGOUT') {
    return null
  }
  if (action.type === 'GET_CURRENT_USER') {
    return action.user ? { name: action.user.name, username: action.user.username, token: action.user.token } : null
  }

  return store
}

export const login = (username, password) => {
  return async (dispatch) => {

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(user))
      blogService.setToken(user.token)

      dispatch({
        type: 'LOGIN',
        user
      })
    }
    catch (exception) {
      console.log('Login reducer: ', exception)
    }
  }
}

export const logout = () => {
  window.localStorage.removeItem(USER_STORAGE_NAME)
  blogService.setToken(null)

  return {
    type: 'LOGOUT'
  }
}

export const getStoredUser = () => {
  const loggedUserJSON = window.localStorage.getItem(USER_STORAGE_NAME)
  let user = null

  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
  }

  return {
    type: 'GET_CURRENT_USER',
    user
  }
}

export default reducer