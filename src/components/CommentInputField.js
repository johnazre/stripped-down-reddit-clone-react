import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../redux/actions/comments'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class CommentInputField extends Component {
  state = {
    newComment: ''
  }
  handleChange = event => {
    this.setState({ newComment: event.target.value })
  }
  render() {
    return (
      <Form style={{ padding: 10 }} inline>
        <FormGroup>
          <Label style={{ marginRight: 5, fontSize: 16 }}>
            Add comment here:
          </Label>
          <Input
            type="text"
            value={this.state.newComment}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          onClick={() =>
            this.props.addComment(this.state.newComment, this.props.postId)
          }
        >
          Submit
        </Button>
      </Form>
    )
  }
}

export default connect(
  null,
  { addComment }
)(CommentInputField)
