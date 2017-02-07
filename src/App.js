import React from 'react'

import 'normalize.css'
import Header from './components/header/Header'
import Post from './components/post/Post'
import styles from './App.css'

const App = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
)

export default App
