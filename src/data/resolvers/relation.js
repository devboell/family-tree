const find = require('lodash/fp/find')
const RelationModel = require('../models/relation')
const PersonModel = require('../models/person')

const relations = async () => {
  const allRelations = await RelationModel.findAll()
  const person1Ids = allRelations.map(rel => rel.person1Id)
  const person2Ids = allRelations.map(rel => rel.person2Id)
  const person1s = await PersonModel.findByIds(person1Ids)
  const person2s = await PersonModel.findByIds(person2Ids)

  const result = allRelations.map(rel => (
    {
      id: rel.id,
      person1: find({ id: rel.person1Id })(person1s),
      person2: find({ id: rel.person2Id })(person2s),
    }
  ))

  return result
}

module.exports = { relations }
