import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentList = (props) => {
  console.log('props in commentlist', props)
  let listOfComments = props.comments
    .filter(comment => comment.post_id == props.postId)
    .map(comment => <Comment key={comment.id} comment={comment} />)
  return (
    <ul>{listOfComments}</ul>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)