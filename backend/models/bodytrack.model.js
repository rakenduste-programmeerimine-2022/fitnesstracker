const { Schema, model } = require('mongoose')

const bodySchema = new Schema(
    {
        weight: { type: integer},
        bicep: { type: integer},
        forearm: { type: integer},
        torso: { type: integer},
        waist: { type: integer},
        quad: { type: integer},
        calve: { type: integer}
    }
)

const BodyTrack = model('BodyTrackModel', bodySchema)

module.exports = BodyTrack