export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Person', (table) => {
      table.increments('id')
      table.string('name')
      table.string('title')
      table.integer('birthDate')
      table.integer('deathDate')
      table.boolean('isMonarch')
      table.string('gender')
      table.integer('bornToId')
      table.foreign('bornToId').references('Relation.id')
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Person'),
  ])
}
