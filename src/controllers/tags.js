const model = require('../models/tags')

getAllTags = (req, res, next) => {
  let promise = model.getAllTags()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

getTagById = (req, res, next) => {
  let id = req.params.id
  let promise = model.getTagById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

createCostume = (req, res, next) => {
  let promise = model.createTag(req.body)

  promise.then(result => {
    return result.error ? next(result) :
    res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

editTag = (req, res, next) => {
  let id = req.params.id
  let promise = model.editTag(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

deleteTagById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteTagById(id)

  promise.then(result => {
    return result.error ? next(result) :
    res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  editTag,
  deleteTagById
}
