import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import About from '../about/About'
import NotFound from '../notfound/NotFound'
import Home from '../home/Home'
import PostDetail from '../postDetail/PostDetail'
import posts from '../../../blog-posts.json'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <Home posts={posts.posts} />} />
    <Route exact path='/about' component={About} />
    <Route exact path='/post/:slug' component={props => {
      const post = posts.posts.filter(post => props.match.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
