const relations = `
  INSERT INTO 'Relation' VALUES
  (1,1,2),
  (2,4,5),
  (3,7,8),
  (4,9,10),
  (5,4,14),
  (6,15,16)
`

/*
const relations = `
  INSERT INTO 'Relation' VALUES
  (1,1,2)
`
*/

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Relation').truncate()
    .then(() =>
      knex.raw(relations),
    )
}
