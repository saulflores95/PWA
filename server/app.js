import express from 'express'
import mongoose from 'mongoose'
import routes from './routes.js'
import bodyParser from 'body-parser'
import path from 'path'
mongoose.connect('mongodb://localhost:27017/pwa', () => {
  console.log('Connected to mongodb pwa')
})

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)
app.use('/', express.static(path.join(__dirname, '../dist')))
export default app
