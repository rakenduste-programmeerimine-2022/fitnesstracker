const Body = require('../models/bodytrack.model')

exports.saveinfo = async (req, res) => {
    const { data } = req.params

    const sendData = await Body.create({ data })

    res.send(sendData)
}

exports.getinfo = async (req, res) => {
    const getInfo = await Example.find({}, {_id: 0, __v: 0})
    res.send(getInfo)
}