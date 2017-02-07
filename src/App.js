import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import 'normalize.css'
import posts from '../blog-posts.json'
import Header from './components/header/Header'
// import Post from './components/post/Post'
import styles from './App.css'
import About from './components/about/About'
import NotFound from './components/notfound/NotFound'
import Home from './components/home/Home'
import PostDetail from './components/postDetail/PostDetail'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Match exactly pattern='/' component={Home} />
        <Match exactly pattern='/about' component={About} />
        <Match exactly pattern='/post/:slug' component={props => {
          const post = posts.posts.filter(post => props.params.slug === post.slug)
          return <PostDetail post={post[0]} />
        }} />
        <Miss component={NotFound} />
      </div>
    </div>
  </BrowserRouter>
)

export default App
