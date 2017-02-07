import React from 'react'
import styles from './Post.css'
import { Link } from 'react-router'

const Post = (post) => (
  <div>
    <h2 className={styles.title}>
      {post.titleLink
      ? <Link className={styles.link} to={`/post/${post.slug}`}>{post.title}</Link>
      : post.title }
    </h2>
    <p className={styles.content}>{post.excerpt}</p>
  </div>
)

export default Post
