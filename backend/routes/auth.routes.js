const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/protectedRoute', authController.protected)

module.exports = router