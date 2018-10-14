const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/costumes')
const ctrlTags = require('../controllers/tags')

router.get('/', ctrl.getAllCostumes)
router.get('/:id', ctrl.getCostumeById)
router.get('/:id/all', ctrl.getCostumeWithNestedTags)
router.post('/', ctrl.createCostume)
router.put('/:id', ctrl.updateCostume)
router.delete('/:id', ctrl.deleteCostumeById)

module.exports = router
