const knex = require('../connectors')
const sql = require('./sql')


const findByPersonId = personId =>
  knex.raw(sql.partners, personId)

const unassignChildren = relationIds =>
  knex('Person')
    .whereIn('bornToId', relationIds)
    .update('bornToId', null)

const findChildren = relationIds =>
  knex('Person').whereIn('bornToId', relationIds)


module.exports = {
  findByPersonId,
  unassignChildren,
  findChildren,
}
