import React from 'react'
import Post from '../post/Post'

const Home = ({posts}) => (
  <div>
    {posts.map(post => <Post key={post.slug} {...post} titleLink />)}
  </div>
)

export default Home
