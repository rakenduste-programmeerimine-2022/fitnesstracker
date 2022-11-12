const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        // status: { type: String, enum: ['pending', 'active'], default: 'pending' },
    },
    { timestamps: true }
)

userSchema.statics.signup = async ({ name, email, password }) => {
    return new Promise(async (resolve, reject) => {
        const user = await User.findOne({ email })
        if (user) reject('User already exists')

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashPassword,
        })

        newUser.save((err) => {
            if (err) return reject(err)
            resolve(newUser)
        })
    })
}

const User = model('User', userSchema)

module.exports = User