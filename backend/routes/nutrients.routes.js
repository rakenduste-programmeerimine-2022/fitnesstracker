const express = require('express')
const router = express.Router()
const nutrientsController = require('../controllers/nutrients.controller')

router.post('/savenutrients', nutrientsController.savenutrients)
router.get('/getnutrients', nutrientsController.getnutrients)

module.exports = router