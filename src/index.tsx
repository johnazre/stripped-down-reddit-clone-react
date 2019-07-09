import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// import for Redux stuff
import { Provider } from 'react-redux'
import store from './store'
import 'bootswatch/dist/yeti/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
