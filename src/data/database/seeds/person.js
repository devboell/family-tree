const persons = `
  INSERT INTO 'Person' VALUES
  (1,'William I','King of England',1028,1087,1,'M',NULL),
  (2,'Matilde of Flanders','Queen of England',1031,1083,0,'F',NULL),
  (3,'William Rufus','King of England',1056,1100,1,'M',1),
  (4,'Henry I','King of England',1068,1135,1,'M',1),
  (5,'Matilde of Scotland','Queen of England',1080,1118,0,'F',NULL),
  (6,'William Adelin','Duke of Normandy',1103,1120,0,'M',2),
  (7,'Empress Matilde','Holy Roman Empress',1102,1167,0,'F',2),
  (8,'Geoffrey Plantagenet','Count of Anjou',1113,1151,0,'M',NULL),
  (9,'Henry II','King of England',1133,1189,1,'M',3),
  (10,'Eleanor of Aquitane','Queen of England',1122,1204,0,'F',NULL),
  (11,'Richard I','King of England',1157,1199,1,'M',4),
  (12,'John I','King of England',1166,1216,1,'M',4),
  (13,'Robert Curthose','Duke of Normandy',1051,1134,1,'M',1),
  (14,'Adeliza of Louvain','Queen of England',1103,1151,0,'F',NULL),
  (15,'Adela of Normandy','Countess of Blois',1067,1137,0,'F',1),
  (16,'Stephen II Henry','Count of Blois',1045,1102,0,'M',NULL),
  (17,'Stephen of Blois','King of England',1092,1154,1,'M',6)
`

/*
const persons = `
  INSERT INTO 'Person' VALUES
  (1,'William I','King of England',1028,1087,1,'M',NULL),
  (2,'Matilde of Flanders','Queen of England',1031,1083,0,'F',NULL)
`
*/

export function seed(knex) { // eslint-disable-line import/prefer-default-export
  return knex('Person').truncate()
    .then(() =>
      knex.raw(persons),
    )
}
