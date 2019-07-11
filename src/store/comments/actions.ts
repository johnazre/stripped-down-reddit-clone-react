import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../../store'
import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILED,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED
} from './types'

export const fetchComments = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_COMMENTS_PENDING
      })
      let comments = await axios.get('http://localhost:8082/api/comments')
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments.data
      })
    } catch (err) {
      dispatch({
        type: FETCH_COMMENTS_FAILED,
        payload: err
      })
    }
  }
}

export const addComment = (
  comment: string,
  postId?: number
): ThunkAction<void, AppState, null, Action<string>> => {
  let data = {
    post_id: postId,
    content: comment
  }
  return async dispatch => {
    try {
      let response = await axios.post(
        `http://localhost:8082/api/comments`,
        data
      )
      let newComment = response.data
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: newComment
      })
    } catch (err) {
      dispatch({
        type: ADD_COMMENT_FAILED,
        payload: err
      })
    }
  }
}
