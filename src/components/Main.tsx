import React, { useState } from 'react'
import PostList from './PostList'
import AddPostForm from './AddPostForm'
import { Button } from 'reactstrap'

const Main = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <div className="text-right">
        <Button onClick={() => setIsOpen(!isOpen)}>Add Post</Button>
      </div>

      {isOpen && <AddPostForm />}

      <PostList />
    </div>
  )
}

export default Main
