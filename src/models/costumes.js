const costumesQuery = require('../../queries/costumes')

const getAllCostumes = () => {
  costumes = costumesQuery.getAllCostumes()

  return costumes.then(result => {
    console.log('result in models---->', result);
    return result.length < 1
      ? { error: 'error retreiving costumes', status: 404 }
      : result
  })
}

const getCostumeById = (id) => {
  costume = costumesQuery.getCostumeById(id)

  return costume.then(result => {
    return !result
      ? { error: 'error retreiving costume', status: 404 }
      : result
  })
}

const createCostume = (body) => {
  console.log('body>>', body);
  costume = costumesQuery.createCostume(body)

  return costume.then(result => {
    return !result
      ? { error: 'error creating costume', status: 500 }
      : result
  })
}

// .then((result) => {
//   console.log(result);
//   knex.destroy();
// })
// .catch((err) => {
//   console.error(err);
//   knex.destroy();
//   process.exit(1);  // what is process.exit???
// });

const updateCostume = (id, body) => {
  costume = costumesQuery.updateCostume(id, body)

  return costume.then(result => {
    return !result
      ? { error: 'error updating costume', status: 500 }
      : result
  })
}

const deleteCostumeById = (id) => {
  costume = costumesQuery.deleteCostumeById(id)

  return costume.then(result => {
    return !result
      ? { error: 'error deleting costume', status: 500 }
      : result
  })
}

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostumeById
}
