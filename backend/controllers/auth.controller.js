const { body } = require('express-validator')
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
    User.signup(req.body)
        .then((data) => res.send(`Seems to be done ${data}`))
        .catch((err) => res.send(`Failed successfully ${err}`))
}

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email})
    if (!user) return res.send('Email not found')

    var passwordValid = bcrypt.compareSync(
        req.body.password,
        user.password
    )

    if (!passwordValid) return res.send('Invalid password')

    res.send({
        name: user.name,
        email: user.email,
    })
}

exports.protected = async (req, res) => {
    const users = await User.find({}, {_id: 0, __v: 0})
    res.send(users)
}