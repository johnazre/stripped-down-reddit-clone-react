import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILED,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED
} from '../actions/comments'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_PENDING:
      return state
    case FETCH_COMMENTS_SUCCESS:
      return [...action.payload.data]
    case FETCH_COMMENTS_FAILED:
      return action.payload
    case ADD_COMMENT_SUCCESS:
      return [...state, action.payload]
    case ADD_COMMENT_FAILED:
      return action.payload
    default:
      return state
  }
}
