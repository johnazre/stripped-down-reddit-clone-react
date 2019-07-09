import { createStore, combineReducers, applyMiddleware } from 'redux'
import posts from './reducers/posts'
import comments from './reducers/comments'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  posts,
  comments
})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
