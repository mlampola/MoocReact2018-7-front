import userDetailsService from '../services/userDetails'

const reducer = (store = [], action) => {
  switch (action.type) {
  case 'INIT_USER_DETAILS':
    return action.details

  default:
    return store
  }
}

export const userDetailsInitialization = () => {
  return async (dispatch) => {
    const details = await userDetailsService.getAll()
    dispatch({
      type: 'INIT_USER_DETAILS',
      details
    })
  }
}

export default reducer