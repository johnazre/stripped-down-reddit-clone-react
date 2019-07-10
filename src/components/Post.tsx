import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import CommentsList from './CommentsList'
import CommentInputField from './CommentInputField'
import { IPost } from '../store/posts/types'

interface PostProps {
  post: IPost
}

const Post = (props: PostProps) => {
  let { img_url, title, author, content, id } = props.post
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
