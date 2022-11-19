const express = require('express')
const router = express.Router()
const exampleController = require('../controllers/example.controller')

// middleware
// router.use((req, res, next) => {
//     const { email } = req.body

//     if (email !== 'Karl') throw new Error('Wrong user')

//     req.user = {
//         email: 'Karl',

//     console.log('Time: ', Date.now())
//     next()

// })

router.get('/', exampleController.read)
router.post('/add', exampleController.create)
// router.put('/:name', exampleController.update)
router.delete('/:name', exampleController.delete)

module.exports = router