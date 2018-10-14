const express = require('express')
const router = express.Router()
const ctrlTags = require('../controllers/tags')

router.get('/', ctrlTags.getAllTags)
router.get('/:id', ctrlTags.getTagById)
router.post('/', ctrlTags.createTag)
router.put('/:id', ctrlTags.editTag)
router.delete('/:id', ctrlTags.deleteTagById)

module.exports = router

// router.get('/:id/tags/:id', ctrlTags.getTagById)
// router.post('/:id/tags', ctrlTags.createTags)
// router.put('', ctrlTags.updateCostume)
// router.delete('', ctrlTags.deleteCostumeById)

// router.get('/:id/tags', ctrlTags.getCostumeById)
// router.post('/:id/tags', ctrlTags.createCostume)

// need to add tag id to routes
// router.put('/:id/tags/:tagId', tagsCtrl.update)
// router.delete('/:id/tags/:tagId', tagsCtrl.deleteById)
