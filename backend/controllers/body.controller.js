const Body = require('../models/bodytrack.model')

exports.saveinfo = async (req, res) => {
    // const { data } = req.params

    // const sendData = await Body.create({ data })

    // res.send(sendData)

    Body.saveinfo(req.body)
        .then((data) => res.send(`Seems to be done ${data}`))
        .catch((err) => res.send(`Seems to be error ${err}`))
}

exports.getinfo = async (req, res) => {
    const getInfo = await Body.find({}, {_id: 0, __v: 0})
    res.send(getInfo)
}