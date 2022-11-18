const Example = require('../models/example.model')

exports.create = async (req, res) => {
    Example.create(req.body)
        .then((data) => res.send(`Saved ${data}`))
        .catch((err) => res.send(`Something went wrong ${err}`))
}

exports.read = async (req, res) => {
    const examples = await Example.find({ email: req.body.email }, {_id: 0, __v: 0})
    if (!examples) return res.send('Email not found')
    res.send(examples)
}

exports.update = (req, res) => {
    
}
  
exports.delete = (req, res) => {
    
}
