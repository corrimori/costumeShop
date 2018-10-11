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

// updateCostume = (id, body) => {
//   return knex('costumes')
//   .where('id', id)
//   .update(body)
//   .where('id', id)

// don't have to do the entire object, replace with (body)
  // .update({
  //   name: body.name,
  //   price: body.price,
  //   description: body.description,
  //   tags: // array of tags
  // })


  // .then((result) => {
  //   console.log(result);
  //   knex.destroy();
  // })
  // .catch((err) => {
  //   console.error(err);
  //   knex.destroy();
  //   process.exit(1);
  // });
// }

// deleteCostumeById = (id) => {
//   return knex('costumes')
//     .where('id', id)
//     .del()


    // .then((result) => {
    //   console.log(result);
    //   knex.destroy();
    // })
    // .catch((err) => {
    //   console.error(err);
    //   knex.destroy();
    //   process.exit(1);
    // });
// }

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume
  // updateCostume,
  // deleteCostumeById
}
