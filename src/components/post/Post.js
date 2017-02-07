import React from 'react'
import styles from './Post.css'

const Post = () => (
  <div>
    <h2><a className={styles.title} href='#'>Blog Title</a></h2>
    <p className={styles.content}>Content</p>
  </div>
)

export default Post
