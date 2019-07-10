import { createStore, combineReducers, applyMiddleware } from 'redux'
import posts from './posts/reducer'
import comments from './comments/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  posts,
  comments
})

export default createStore(rootReducer, applyMiddleware(thunk, logger))

export type AppState = ReturnType<typeof rootReducer>
