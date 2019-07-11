import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '..'
import { Action } from 'redux'
import { IPost } from './types'
import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED
} from '../posts/types'

export const fetchPosts = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_POSTS_PENDING
      })
      let posts = await axios.get('http://localhost:8082/api/posts')
      console.log('posts', posts)
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts.data
      })
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const addPost = (
  post: IPost
): ThunkAction<void, AppState, null, Action<string>> => {
  return async dispatch => {
    try {
      let newPost = await axios.post(`http://localhost:8082/api/posts`, post)
      dispatch({
        type: ADD_POST_SUCCESS,
        payload: newPost.data
      })
    } catch (err) {
      dispatch({
        type: ADD_POST_FAILED,
        payload: err
      })
    }
  }
}
