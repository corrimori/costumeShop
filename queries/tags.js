const knex = require('./db')

getAllTags = () => {
  return knex('tags').orderBy('created_at', 'desc')
}

getTagById = (id) => {
  return knex('tags').where('id', id)
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
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
}

module.exports = {
  getAllTags,
  getTagById,
  editTag
}
