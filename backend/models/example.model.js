// const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const exampleSchema = new Schema(
    {
        name: { type: String, required: true },
    }
)

const Example = model('ExampleModel', exampleSchema)

module.exports = Example