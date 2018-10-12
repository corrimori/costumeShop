const express = require('express')
const router = express.Router()
const ctrlTags = require('../controllers/tags')

router.get('/', ctrlTags.getAllTags)
router.get('/:id', ctrlTags.getTagById)
// router.post('/', ctrlTags.createTag)
router.put('/:id', ctrlTags.editTag)
// router.delete(':id', ctrlTags.deleteTagById)

module.exports = router
