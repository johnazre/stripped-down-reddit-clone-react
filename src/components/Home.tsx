import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      This is the home page. Go to <Link to="/posts">The posts page</Link>
    </div>
  )
}
export default Home
