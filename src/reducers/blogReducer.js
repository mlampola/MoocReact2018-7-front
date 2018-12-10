import blogService from '../services/blogs'

const reducer = (store = [], action) => {
  switch (action.type) {
    case 'LIKE': {
      const restOfTheBlogs = store.filter(b => b.id !== action.blog.id)
      return [...restOfTheBlogs, action.blog]
    }

    case 'CREATE':
      return [...store, action.blog]

    case 'DELETE':
      return store.filter(b => b.id !== action.id)

    case 'INIT_BLOGS':
      return action.blogs

    default:
      return store
  }
}

export const blogCreation = (data) => {
  return async (dispatch) => {
    const blog = await blogService.create(data)
    dispatch({
      type: 'CREATE',
      blog
    })
  }
}

export const blogDeletion = (id) => {
  return async (dispatch) => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE',
      id
    })
  }
}

export const blogLike = (id) => {
  return async (dispatch) => {
    let blog = await blogService.getById(id)
    blog.likes += 1
    await blogService.update(blog)
    dispatch({
      type: 'LIKE',
      blog
    })
  }
}

export const blogInitialization = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }
}

export default reducer