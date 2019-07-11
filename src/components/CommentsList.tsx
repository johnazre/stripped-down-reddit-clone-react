import React from 'react'
import { useSelector } from 'react-redux'
import { IComment } from '../store/comments/types'
import { AppState } from '../store'
import Comment from './Comment'

interface CLProps {
  postId?: number
}

const CommentList = (props: CLProps) => {
  let listOfComments = useSelector((state: AppState) =>
    state.comments
      .filter((comment: IComment) => comment.post_id == props.postId)
      .map((comment: IComment) => (
        <Comment key={comment.id} comment={comment} />
      ))
  )
  return <ul>{listOfComments}</ul>
}

export default CommentList
