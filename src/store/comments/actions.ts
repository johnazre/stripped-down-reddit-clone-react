import axios from 'axios'

export const FETCH_COMMENTS_PENDING = 'FETCH_COMMENTS_PENDING'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED'

export const fetchComments = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_COMMENTS_PENDING
      })
      let comments = await axios.get('http://localhost:8082/api/comments')
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
      })
    } catch (err) {
      dispatch({
        type: FETCH_COMMENTS_FAILED,
        payload: err
      })
    }
  }
}

export const addComment = (comment, postId) => {
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
