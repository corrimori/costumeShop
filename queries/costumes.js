const knex = require('./db')

getAllCostumes = () => {
  return knex('costumes').orderBy('created_at', 'desc')
}

getCostumeById = (id) => {
  return knex('costumes').where('id', id)
}

createCostume = (body) => {
  return knex('costumes')
  .insert(body).returning('*')
  // don't have to write the entire object-- replace with (body)
  // .insert({
  //   name: body.name,
  //   price: body.price,
  //   description: body.description,
  //   tags: body.tags
  // })

  // .then((result) => {
  //   console.log(result);
  //   knex.destroy();
  // })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
}

updateCostume = (id, body) => {
  return knex('costumes')
  .where('id', id)
  // .update(body)
  .update({
    name: body.name,
    price: body.price,
    description: body.description,
    tags: body.tags
  })
  .returning('*')
// .then((result) => {
  //   console.log(result);
  //   knex.destroy();
  // })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
}

deleteCostumeById = (id) => {
  return knex('costumes')
    .where('id', id)
    .del()
    .returning('*')

    // .then((result) => {
    //   console.log(result);
    //   knex.destroy();
    // })
    .catch((err) => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
}

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostumeById
}
