import axios from 'axios'

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const ADD_POST_FAILED = "ADD_POST_FAILED"

export const fetchPosts = () => {
  return async dispatch => {
    try{
      dispatch({
        type: FETCH_POSTS_PENDING
      })
      let posts = await axios.get("http://localhost:8082/api/posts")
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch(err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}


export const addPost = (post) => {
  return async dispatch => {
   try{
     let newPost = await axios.post(`http://localhost:8082/api/posts`, post)
     dispatch({
       type: ADD_POST_SUCCESS,
       payload: newPost
     })
   }catch(err) {
     dispatch({
       type: ADD_POST_FAILED,
       payload: err
     })
   }
  }
}
