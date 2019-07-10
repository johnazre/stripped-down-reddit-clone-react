import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { IComment } from '../store/comments/types'
import { AppState } from '../store'

interface CLProps {
  comments: IComment[]
  postId?: number
}

const CommentList = (props: CLProps) => {
  let listOfComments = props.comments
    .filter((comment: IComment) => comment.post_id == props.postId)
    .map((comment: IComment) => <Comment key={comment.id} comment={comment} />)
  return <ul>{listOfComments}</ul>
}

const mapStateToProps = (state: AppState) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
