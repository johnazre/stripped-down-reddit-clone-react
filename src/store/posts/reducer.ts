import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  PostActionTypes
} from '../posts/types'

import { IPost } from './types'

let initialState: IPost[] = []

export default (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return state
    case FETCH_POSTS_SUCCESS:
      return [...action.payload]
    case FETCH_POSTS_FAILED:
      return action.payload
    case ADD_POST_SUCCESS:
      console.log('action payload', action.payload)
      return [...state, action.payload]
    case ADD_POST_FAILED:
      return action.payload
    default:
      return state
  }
}
