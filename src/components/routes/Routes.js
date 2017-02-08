import React from 'react'
import { Match, Miss } from 'react-router'

import About from '../about/About'
import NotFound from '../notfound/NotFound'
import Home from '../home/Home'
import PostDetail from '../postDetail/PostDetail'
import posts from '../../../blog-posts.json'

const Routes = () => (
  <div>
    <Match exactly pattern='/' component={() => <Home posts={posts.posts} />} />
    <Match exactly pattern='/about' component={About} />
    <Match exactly pattern='/post/:slug' component={props => {
      const post = posts.posts.filter(post => props.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Miss component={NotFound} />
  </div>
)

export default Routes
