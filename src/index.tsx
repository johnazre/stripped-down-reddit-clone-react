import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// import for Redux stuff
import { Provider } from 'react-redux'
import { fetchPosts } from './redux/actions/posts'
import { fetchComments } from './redux/actions/comments'
import store from './redux/store'
import 'bootswatch/dist/yeti/bootstrap.min.css'

let newStore = store()

newStore.dispatch(fetchPosts())
newStore.dispatch(fetchComments())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
