import React, { Component } from 'react'
import PostList from './PostList'
import AddPostForm from './AddPostForm'
import { Button } from 'reactstrap'

class Main extends Component {
  state = {
    isToggle: true
  }
  render() {
    return (
      <div>
        <div className="text-right">
          <Button
            onClick={() => this.setState({ isToggle: !this.state.isToggle })}
          >
            Add Post
          </Button>
        </div>

        {this.state.isToggle ? <AddPostForm /> : null}

        <PostList />
      </div>
    )
  }
}

export default Main
