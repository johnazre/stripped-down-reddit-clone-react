import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class PostList extends React.Component {
  state = {
    filterPhrase: ''
  }
  handleChange = event => {
    this.setState({ filterPhrase: event.target.value })
  }
  render() {
    const listOfPosts = this.props.posts
      .filter(post => post.title.includes(this.state.filterPhrase))
      .map(post => <Post key={post.id} post={post} />)
    return (
      <div>
        <Form style={{ padding: 10 }} inline>
          <FormGroup>
            <Label style={{ marginRight: 5, fontSize: 16 }}>
              Filter by title
            </Label>
            <Input
              type="text"
              value={this.state.filterPhrase}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        {listOfPosts}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostList)
