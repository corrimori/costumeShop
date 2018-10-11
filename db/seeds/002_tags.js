exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        {
          id: 1,
          name: 'Halloween',
          color: '#f4a442'
        },
        {
          id: 2,
          name: 'Humorous',
          color: '#f4a442'
        },
        {
          id: 3,
          name: 'Sale',
          color: '#f44d41'
        },
        {
          id: 4,
          name: 'Animal',
          color: '#41c1f4'
        },
        {
          id: 5,
          name: 'Super Hero',
          color: '#9a41f4'
        },
        {
          id: 6,
          name: 'Scary',
          color: '#f441cd'
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"tags_id_seq"', (SELECT MAX("id") FROM "tags"))`
      )
    )
}
