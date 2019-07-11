import React, { FormEvent, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { addPost } from '../store/posts/actions'
import { useDispatch } from 'react-redux'

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    img_url: ''
  })
  const dispatch = useDispatch()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(addPost(formData))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input
          type="text"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Body</Label>
        <Input
          type="text"
          value={formData.content}
          onChange={e => setFormData({ ...formData, content: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Author</Label>
        <Input
          type="text"
          value={formData.author}
          onChange={e => setFormData({ ...formData, author: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Image Url</Label>
        <Input
          type="text"
          value={formData.img_url}
          onChange={e => setFormData({ ...formData, img_url: e.target.value })}
        />
      </FormGroup>
      <Button type="submit"> Submit</Button>
    </Form>
  )
}

export default AddPostForm
