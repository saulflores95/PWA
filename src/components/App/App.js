import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import 'normalize.css'
import styles from './App.css'
import Routes from '../routes/Routes'
import Header from '../header/Header'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className={styles.container}>
        <Routes />
      </div>
    </div>
  </Router>
)

export default App
