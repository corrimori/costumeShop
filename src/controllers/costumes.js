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

module.exports = {
  getAllCostumes,
  getCostumeById
}
