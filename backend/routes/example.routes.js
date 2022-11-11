const express = require('express')
const router = express.Router()
const exampleController = require('../controllers/example.controller')

// middleware
/* router.use((req, res, next) => {
    const { name } = req.body

    if (name !== 'JohnnyTest') throw new Error('Name does not match')

    req.user = {
        name: 'JohnnyTest',
        role: 'Owner',
    }

    console.log('Time:', Date.now())
    next()
}) */

const getMiddleWare = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}

router.get('/', getMiddleWare, exampleController.read)
router.post('/:name', exampleController.create)
router.put('/:name', exampleController.update)
router.delete('/:name', exampleController.delete)

module.exports = router