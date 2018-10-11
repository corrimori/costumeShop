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

// editTag = (req, res, next) => {
//   let promise = model.editTag(
//     req.params.id,
//     req.body.name,
//     req.body.color
//   )
//
//   promise.then(result => {
//     res.status(200).json({
//       result,
//       message: `Tag ${req.params.id} updated`
//     })
//   })
//
//   promise.catch(error => {
//     res.status().json()
//   })
// }

module.exports = {
  getAllTags,
  getTagById
  // editTag
}
