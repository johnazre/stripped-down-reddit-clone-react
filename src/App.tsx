import React, { useEffect } from 'react'
import './App.css'
import Main from './components/Main'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchComments } from './store/comments/actions'
import { fetchPosts } from './store/posts/actions'

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
      <TopNav />
      <Container className="App">
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect(
  null,
  { fetchPosts, fetchComments }
)(App)
