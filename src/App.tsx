import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'

const App = () => {
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

export default App
