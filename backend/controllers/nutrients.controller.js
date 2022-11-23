const Nutrients = require('../models/nutrients.model')

exports.savenutrients = async (req, res) => {
    Nutrients.savenutrients(req.body)
        .then((data) => res.send(`Seems to be done ${data}`))
        .catch((err) => res.send(`There seems to be an error: ${err}`))
}
exports.getnutrients = async (req, res) => {
    const getInfo = await Nutrients.find({}, {_id: 0, __v: 0})
    res.send(getInfo)
}