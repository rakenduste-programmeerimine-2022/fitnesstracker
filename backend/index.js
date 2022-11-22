const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8080
require('dotenv').config()
const mongoose = require('mongoose')

const exampleRoutes = require('./routes/example.routes') // example
const accountsRoutes = require('./routes/auth.routes')
const bodyRoutes = require('./routes/body.routes')

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(morgan('dev'))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitnesstracker0.9ggvhfi.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.use('/examples', exampleRoutes) // example
app.use('/accounts', accountsRoutes)
app.use('/body', bodyRoutes)

app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})