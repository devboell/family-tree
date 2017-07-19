export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('Relation', (table) => {
      table.increments('id')
      table.integer('person1Id')
      table.integer('person2Id')
      table.foreign('person1Id').references('Person.id')
      table.foreign('person2Id').references('Person.id')
    }),
  ])
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Relation'),
  ])
}
