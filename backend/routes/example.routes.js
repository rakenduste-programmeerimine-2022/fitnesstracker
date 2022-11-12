const express = require('express')
const router = express.Router()
const exampleController = require('../controllers/example.controller')

// middleware
// router.use((req, res, next) => {
//     const { email } = req.body

//     if (email !== req.body.email) throw new Error('Access denied')

//     req.user = {
//         email: req.body.email
//     }

//     console.log('Time: ', Date.now())
//     next()
// })

const getMiddleWare = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}

router.get('/', getMiddleWare, exampleController.read)
router.post('/:name', exampleController.create)
router.put('/:name', exampleController.update)
router.delete('/:name', exampleController.delete)

module.exports = router