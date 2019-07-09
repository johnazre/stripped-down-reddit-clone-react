import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/comments/actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

interface CIFProps {
  postId?: number
  addComment(newComment: string, postId?: number): void
}

interface CIFState {
  newComment: string
}

class CommentInputField extends Component<CIFProps, CIFState> {
  state = {
    newComment: ''
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
