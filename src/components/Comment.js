import React from 'react'

const Comment = (props) => {
  return (
    <li>{props.comment.content}</li>
  )
}

export default Comment