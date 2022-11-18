// const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const exampleSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true}
    },
    { timestamps: true}
)

exampleSchema.statics.create = async ({ name, email }) => {
    return new Promise(async (resolve, reject) => {    
        const newExample = new Example({
            name,
            email
        })

        newExample.save((err) => {
            if (err) return reject(err)
            resolve(newExample)
        })
    })
}

const Example = model('ExampleModel', exampleSchema)

module.exports = Example