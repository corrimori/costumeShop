const costumesQuery = require('../../queries/costumes')

const getAllCostumes = () => {
  costumes = costumesQuery.getAllCostumes()

  return costumes.then(result => {
    return result.length < 1
      ? { error: 'error retreiving costumes', status: 404 }
      : result
  })
}

const getCostumeById = (id) => {
  costume = costumesQuery.getCostumeById(id)

  return costume.then(result => {
    return result.length < 1
      ? { error: 'error retreiving costume', status: 404 }
      : result
  })
}

module.exports = {
  getAllCostumes,
  getCostumeById
}
