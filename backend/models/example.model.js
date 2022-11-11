const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
    name: String,
})

const Example = mongoose.model('ExampleModel', exampleSchema)

module.exports = Example