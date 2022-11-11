const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8080
require('dotenv').config()
const mongoose = require('mongoose')

const exampleRoutes = require('./routes/example.routes') // example

app.use(morgan('dev'))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitnesstracker0.9ggvhfi.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.use('/examples', exampleRoutes) // example

app.get('/', (req,res) => { // example
  console.log(req.body)

  res.send('Data: ' + req.params + ', ' + req.body)
}) 

app.get('/:name', (req, res) => { // example
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body,
  })
})

app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})