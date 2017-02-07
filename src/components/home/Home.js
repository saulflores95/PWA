import React from 'react'
import Post from '../post/Post'
import posts from '../../../blog-posts.json'

console.log(posts)

const Home = () => (
  <div>
    {posts.posts.map(post => {
      return <Post key={post.slug} {...post} titleLink />
    })}
  </div>
)

export default Home
