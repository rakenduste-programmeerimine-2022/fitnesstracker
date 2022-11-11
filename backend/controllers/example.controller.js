const Example = require('../models/example.model')

exports.create = async (req, res) => {
    const { name } = req.params

    const examp = await Example.create({ name })

    res.send(examp)
}

exports.read = async (req, res) => {
    const examples = await Example.find({}, {_id: 0, __v: 0})
    res.send(examples)
}

exports.update = (req, res) => {
    
}
  
exports.delete = (req, res) => {
    
}
