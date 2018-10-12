const knex = require('./db')

getAllTags = () => {
  return knex('tags').orderBy('created_at', 'desc')
}

getTagById = (id) => {
  return knex('tags').where('id', id)
}

createTag = (tag) => {
  return knex('tags')
  .insert(body).returning('*')

  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

editTag = (id, body) => {
  return knex('tags')
  .where('id', id)
  // .update(body)
  .update({
    name: body.name,
    price: body.price,
    description: body.description,
    tags: body.tags
  })
  .returning('*')

  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

deleteTagById = (id) => {
  return knex('tags')
  .where('id', id)
  .del()
  .returning('*')

  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  editTag,
  deleteTagById
}
