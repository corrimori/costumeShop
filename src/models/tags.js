const tagsQuery = require('../../queries/tags')

const getAllTags = () => {
  tags = tagsQuery.getAllTags()

  return tags.then(result => {
    return result.length < 1
      ? { error: 'error retreiving tags', status: 404 }
      : result
  })
}

const getTagById = (id) => {
  tag = tagsQuery.getTagById(id)

  return tag.then(result => {
    return !result
      ? { error: 'error retreiving tag', status: 404 }
      : result
  })
}

// const editTag = (id, name, color) => {
//   tag = tagsQuery.editTag(id, name, color)
//
//   return tag.then( result => {
//     return // result.length < 1
//     ? { error: 'error retreiving tag', status: 404 }
//     : result
//   })
// }

module.exports = {
  getAllTags,
  getTagById
  // editTag
}
