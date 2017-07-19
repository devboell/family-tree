const partners = `
  select
    partner.*,
    rel.id as relationId

  from Person pers
  left join Relation rel
      on pers.id = rel.person1Id
      or pers.id  = rel.person2Id
  join Person partner
      on (partner.id = rel.person1Id and
         partner.id <> pers.id)
      or (partner.id = rel.person2Id and
         partner.id <> pers.id)
  where pers.id = ?
`

const relations = `
  select
    rel.*

  from Person pers
  join Relation rel
      on pers.id = rel.person1Id
      or pers.id  = rel.person2Id
  where pers.id = ?
`

const familyTree =
  `WITH FamilyTree (
    id,
    name,
    bornToId,
    partnerId,
    relationId,
    level
  )
  AS (
  select
    pers.id as id,
    pers.name as name,
    pers.bornToId as bornToId,
    partner.id as partnerId,
    rel.id as relationId,
    0 as level
  from Person pers
  left join Relation rel
      on pers.id = rel.person1Id
      or pers.id  = rel.person2Id
  left join Person partner
      on (partner.id = rel.person1Id and
         partner.id <> pers.id)
      or (partner.id = rel.person2Id and
         partner.id <> pers.id)

  where pers.id = ?

  union all

  select
    pers.id as id,
    pers.name as name,
    pers.bornToId as bornToId,
    partner.id as partnerId,
    rel.id as relationId,
    level + 1
  from Person pers
  left join Relation rel
      on pers.id = rel.person1Id
      or pers.id  = rel.person2Id
  left join Person partner
      on (partner.id = rel.person1Id and
         partner.id <> pers.id)
      or (partner.id = rel.person2Id and
         partner.id <> pers.id)

  join FamilyTree AS fam
       ON pers.bornToId = fam.relationId
  )

  select
    id,
    name,
    bornToId,
    partnerId,
    relationId,
    level
  from FamilyTree
`

module.exports = { partners, relations, familyTree }
