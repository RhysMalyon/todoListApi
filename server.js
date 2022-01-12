import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Task from './api/models/todoListModel.js'
import routes from './api/routes/todoListRoutes.js'

const app = express();
const port = process.env.PORT || 3000;


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res) => {
  res.status(404).send({
    url: `${req.originalUrl} not found`
  })
})

routes(app)

app.listen(port)

console.log(`API server started on: ${port}`)

// Use `mongod --dbpath=/Users/user/data/db` to run DB (replace `user` with your username)