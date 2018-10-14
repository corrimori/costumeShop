exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('costume_tags').insert({ costume_id: 3, tag_id: 1 }),
    knex('costume_tags').insert({ costume_id: 3, tag_id: 2 }),
    knex('costume_tags').insert({ costume_id: 3, tag_id: 5 }),
    knex('costume_tags').insert({ costume_id: 5, tag_id: 1 }),
    knex('costume_tags').insert({ costume_id: 5, tag_id: 6 }),
    knex('costume_tags').insert({ costume_id: 1, tag_id: 2 }),
    knex('costume_tags').insert({ costume_id: 1, tag_id: 3 }),
    knex('costume_tags').insert({ costume_id: 4, tag_id: 4 }),
    knex('costume_tags').insert({ costume_id: 2, tag_id: 5 })
  ])
}
