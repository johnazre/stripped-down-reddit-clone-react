import React, { ChangeEvent, useState } from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { IPost } from '../store/posts/types'
import { AppState } from '../store'

const PostList = () => {
  const [filterPhrase, setFilterPhrase] = useState('')
  const posts = useSelector((state: AppState) => state.posts)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterPhrase(event.target.value)
  }

  const listOfPosts = posts
    .filter((post: IPost) => post.title.includes(filterPhrase))
    .map((post: IPost) => <Post key={post.id} post={post} />)

  return (
    <div>
      <Form style={{ padding: 10 }} inline>
        <FormGroup>
          <Label style={{ marginRight: 5, fontSize: 16 }}>
            Filter by title
          </Label>
          <Input type="text" value={filterPhrase} onChange={handleChange} />
        </FormGroup>
      </Form>
      {listOfPosts}
    </div>
  )
}

export default PostList
