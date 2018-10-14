const model = require('../models/costumes')

getAllCostumes = (req, res, next) => {
  let promise = model.getAllCostumes()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

getCostumeById = (req, res, next) => {
  let id = req.params.id
  let promise = model.getCostumeById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

getCostumeWithNestedTags = (req, res, next) => {
  let id = req.params.id
  let promise = model.getCostumeWithNestedTags()
  console.log('>>>>>>>in controllers function get nested tags')

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

createCostume = (req, res, next) => {
  console.log(req.body);
  let promise = model.createCostume(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

updateCostume = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateCostume(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

deleteCostumeById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteCostumeById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllCostumes,
  getCostumeById,
  getCostumeWithNestedTags,
  createCostume,
  updateCostume,
  deleteCostumeById
}
