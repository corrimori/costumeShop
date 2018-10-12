const tagsQuery = require('../../queries/tags')

const getAllTags = () => {
  tags = tagsQuery.getAllTags()

  return tags.then(result => {
    return result.length < 1
      ? { error: 'error retrieving tags', status: 404 }
      : result
  })
}

const getTagById = (id) => {
  tag = tagsQuery.getTagById(id)

  return tag.then(result => {
    return !result
      ? { error: 'error retrieving tag', status: 404 }
      : result
  })
}

const createTag = (body) => {
  tag = tagQuery.createTag(body)

  return tag.then(result => {
    return !result
    ? { error: 'error creating tag', status: 500}
    : result
  })
}

const editTag = (id, body) => {
  tag = tagsQuery.editTag(id, body)

  return tag.then( result => {
    return !result
    ? { error: 'error updating tag', status: 500 }
    : result
  })
}

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  editTag
}
