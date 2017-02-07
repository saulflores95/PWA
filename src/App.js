import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import 'normalize.css'
import Header from './components/header/Header'
// import Post from './components/post/Post'
import styles from './App.css'
import About from './components/about/About'
import NotFound from './components/notfound/NotFound'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Match exactly pattern='/about' component={About} />
        <Miss component={NotFound} />
      </div>
    </div>
  </BrowserRouter>
)

export default App
