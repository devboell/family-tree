const knex = require('../connectors')

const findAll = () =>
  knex('Person').select('*')

const findById = id =>
  knex('Person').where({ id }).first()

const findByIds = ids =>
  knex('Person')
    .select('*')
    .whereIn('id', ids)

const create = args =>
  knex('Person').insert(args).then(newId => findById(newId[0]))

const update = args =>
  knex('Person').update(args).where({ id: args.id })
    .then(() => findById(args.id))

const remove = id =>
  knex('Person').where({ id }).del()

module.exports = {
  findAll,
  findById,
  findByIds,
  create,
  update,
  remove,
}
