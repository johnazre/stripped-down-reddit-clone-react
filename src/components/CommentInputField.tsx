import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../store/comments/actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

interface CIFProps {
  postId?: number
}

const CommentInputField = (props: CIFProps) => {
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewComment(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(addComment(newComment, props.postId))
  }

  return (
    <Form style={{ padding: 10 }} inline onSubmit={handleSubmit}>
      <FormGroup>
        <Label style={{ marginRight: 5, fontSize: 16 }}>
          Add comment here:
        </Label>
        <Input type="text" value={newComment} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default CommentInputField
