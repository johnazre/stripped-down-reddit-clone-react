import React, { useEffect } from 'react'
import './App.css'
import Main from './components/Main'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchComments } from './store/comments/actions'
import { fetchPosts } from './store/posts/actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

interface AppProps {
  fetchComments(): void
  fetchPosts(): void
}

const App = (props: AppProps) => {
  useEffect(() => {
    props.fetchComments()
    props.fetchPosts()
  }, [])
  return (
    <div>
      <Router>
        <TopNav />
        <Container className="App">
          <Row>
            <Col>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/posts" component={Main} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default connect(
  null,
  { fetchPosts, fetchComments }
)(App)
