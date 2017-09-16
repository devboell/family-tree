const knex = require('knex')
const config = require('../../../knexfile')

/* istanbul ignore next */
const env = process.env.NODE_ENV || 'development'
module.exports = knex(config[env])
