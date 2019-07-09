import React from 'react'
import { IComment } from '../redux/types'

interface CommentProps {
  comment: IComment
}

const Comment = (props: CommentProps) => {
  return <li>{props.comment.content}</li>
}

export default Comment
