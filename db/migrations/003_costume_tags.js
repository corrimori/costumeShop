exports.up = (knex) => {
  return knex.schema.createTable('costume_tags', table => {
    table.integer('costume_id')
    table.foreign('costume_id').references('id').inTable('costumes')
    table.integer('tag_id')
    table.foreign('tag_id').references('id').inTable('tags')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('costume_tags')
}
