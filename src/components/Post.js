import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import CommentsList from './CommentsList'
import CommentInputField from './CommentInputField';

const Post = ({post}) => {
  let {img_url, title, author, content, id, votes, createdAt} = post
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
      <CommentInputField postId={id} />
      <CommentsList postId={id} />
    </div>
  )
}

export default Post
