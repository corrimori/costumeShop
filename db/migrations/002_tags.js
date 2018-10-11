exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', function(table) {
    table.increments()
    table.text('name').notNullable()
    table.text('color').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
}
