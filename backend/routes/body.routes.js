const express = require('express')
const router = express.Router()
const bodyController = require('../controllers/body.controller')

router.post('/saveinfo', bodyController.saveinfo)
router.get('/getinfo', bodyController.getinfo)

module.exports = router