const knex = require('./db')

getAllCostumes = () => {
  return knex('costumes').orderBy('created_at', 'desc')
}

getCostumeById = (id) => {
  return knex('costumes').where('id', id)
}

module.exports = {
  getAllCostumes,
  getCostumeById
}
