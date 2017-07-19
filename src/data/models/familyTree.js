const knex = require('../connectors')
const sql = require('./sql')


const partnerIds = personRecords =>
  personRecords
    .map(person => person.partnerId)
    .filter(id => id)

const familyTreeTable = id =>
  knex.raw(sql.familyTree, id)


const familyPartners = personRecords =>
  knex.select('*')
    .from('Person')
    .whereIn('id', partnerIds(personRecords))


module.exports = { familyTreeTable, familyPartners }
