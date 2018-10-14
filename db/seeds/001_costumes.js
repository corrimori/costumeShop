exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('costumes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('costumes').insert([
        {
          id: 1,
          name: 'Disco Outfit',
          price: 3500,
          description: 'sparkle glitter fun',
          // tags: "['bold', 'sale']"
        },
        {
          id: 2,
          name: 'Superman',
          price: 500,
          description: 'bold red cape adds strength',
          // tags: "['bold', 'sale']"
        },
        {
          id: 3,
          name: 'Spiderman',
          price: 2500,
          description: 'stretchy spandex',
          // tags: "['bold', 'sale']"
        },
        {
          id: 4,
          name: 'Panda',
          price: 4500,
          description: 'cute black and white outfit',
          // tags: "['bold', 'sale']"
        },
        {
          id: 5,
          name: 'Witch',
          price: 500,
          description: 'black dress including pointy hat',
          // tags: "['bold', 'sale']"
        },
        {
          id: 6,
          name: 'Harry Potter',
          price: 500,
          description: 'wizardly magic',
          // tags: "['bold', 'sale']"
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"costumes_id_seq"', (SELECT MAX("id") FROM "costumes"))`
      )
    )
}
