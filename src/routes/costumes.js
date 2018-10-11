const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/costumes')

router.get('/', ctrl.getAllCostumes)
router.get('/:id', ctrl.getCostumeById)
router.post('/', ctrl.createCostume)
// router.put('/:id', ctrl.updateCostume)
// router.delete(':id', ctrl.deleteCostumeById)

// tag routes go thru costumes
// router.get('/:id/tags/:id', ctrlTags.getTagById)
// router.post('/:id/tags', ctrlTags.createTags)
// router.put('', ctrlTags.updateCostume)
// router.delete('', ctrlTags.deleteCostumeById)

module.exports = router

// router.get('/:id/tags', ctrlTags.getCostumeById)
// router.post('/:id/tags', ctrlTags.createCostume)

// need to add tag id to routes
// router.put('/:id/tags/:tagId', tagsCtrl.update)
// router.delete('/:id/tags/:tagId', tagsCtrl.deleteById)
