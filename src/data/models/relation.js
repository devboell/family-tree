const knex = require('../connectors')


const findAll = () =>
  knex('Relation').select('*')

const findByPersonId = personId =>
  knex('Relation')
    .select('id')
    .where('person1Id', personId)
    .orWhere('person2Id', personId)

const remove = ids =>
  knex('Relation')
    .whereIn('id', ids)
    .del()

const create = (personId, partnerIds) => {
  const insertValues = partnerIds.map(id => ({ person1Id: personId, person2Id: id }))
  if (insertValues.length) {
    return knex('Relation').insert(insertValues)
  }
  return null
}

module.exports = {
  findAll,
  findByPersonId,
  create,
  remove,
}
