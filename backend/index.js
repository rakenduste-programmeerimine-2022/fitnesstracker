const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8080
require('dotenv').config()
const mongoose = require('mongoose')

app.use(morgan('dev'))

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitnesstracker0.q4smdde.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))
