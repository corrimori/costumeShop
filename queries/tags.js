const knex = require('./db')

getAllTags = () => {
  return knex('tags').orderBy('created_at', 'desc')
}

getTagById = (id) => {
  return knex('tags').where('id', id)
}

module.exports = {
  getAllTags,
  getTagById
}
