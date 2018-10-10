const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/costumes')

router.get('/', ctrl.getAllCostumes)
router.get('/:id', ctrl.getCostumeById)

module.exports = router
