import { FETCH_POSTS_FAILED, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, ADD_POST_FAILED} from '../actions/posts'

let initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return state
    case FETCH_POSTS_SUCCESS:
      return [...action.payload.data]
    case FETCH_POSTS_FAILED:
      return action.payload
    case ADD_POST_SUCCESS:
      return [...state, action.payload.data]
    case ADD_POST_FAILED:
      return action.payload
    default:
      return state
  }
}
