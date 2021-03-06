import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { addPost } from '../redux/actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddPostForm extends Component {
  state = {
    title: '',
    content: '',
    author: '',
    img_url: ''
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addPost(this.state)
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input
            type="text"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Body</Label>
          <Input
            type="text"
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Author</Label>
          <Input
            type="text"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Image Url</Label>
          <Input
            type="text"
            value={this.state.img_url}
            onChange={e => this.setState({ img_url: e.target.value })}
          />
        </FormGroup>
        <Button type="submit"> Submit</Button>
      </Form>
    )
  }
}

export default connect(
  null,
  { addPost }
)(AddPostForm)
