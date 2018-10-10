exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('costumes').insert([
        {
          id: 1,
          name: 'Carl',
          price: 3500,
          description: 'sparkle glitter fun',
          tags: ['bold', 'sale']
        },
        {
          id: 2,
          name: 'Jon',
          price: 500,
          description: 'bold red cape adds strength',
          tags: ['bold', 'sale']
        },
        {
          id: 3,
          name: 'Glen',
          price: 2500,
          description: 'stretchy spandex',
          tags: ['bold', 'sale']
        },
        {
          id: 4,
          name: 'Panda',
          price: 4500,
          description: 'panda',
          tags: ['bold', 'sale']
        },
        {
          id: 5,
          name: 'Tom',
          price: 500,
          description: 'spotted fur',
          tags: ['bold', 'sale']
        },
        {
          id: 6,
          name: 'Michael',
          price: 500,
          description: 'thegodfather',
          tags: ['bold', 'sale']
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"costumes_id_seq"', (SELECT MAX("id") FROM "costumes"))`
      )
    )
}
