import express from 'express'
import path from 'path'
const routes = express()
//controller imports
import userController from './controllers/userController'
import postController from './controllers/postController'

routes.get('/app', (req, res)=> {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})
routes.post('/signup', userController.post)
routes.post('/api/add-post', postController.post)
routes.get('/api/posts', postController.getAll)

export default routes
