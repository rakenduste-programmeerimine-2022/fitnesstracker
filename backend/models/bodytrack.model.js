const { Schema, model } = require('mongoose')

/* coming in as strings */
const bodySchema = new Schema(
    {
        weight: { type: Number, required: true},
        bicep: { type: Number, required: true},
        forearm: { type: Number, required: true},
        torso: { type: Number, required: true},
        waist: { type: Number, required: true},
        quad: { type: Number, required: true},
        calve: { type: Number, required: true}
    }
)

bodySchema.statics.saveinfo = async ({ weight, bicep, forearm, torso, waist, quad, calve }) => {
    return new Promise(async (resolve, reject) => {
        const newBody = new Body({
            weight, 
            bicep, 
            forearm, 
            torso, 
            waist, 
            quad, 
            calve
        })

        newBody.save((err) => {
            if (err) return reject(err)
            resolve(newBody)
        })
    })
}

const Body = model('BodyTrackModel', bodySchema)

module.exports = Body