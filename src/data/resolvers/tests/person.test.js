import knex from '../../connectors'
import person from '../person'

describe('person, resolvers', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })

  it('persons', async () => {
    const allPersons = await person.persons()
    expect(allPersons).toMatchSnapshot()
  })

  it('createPerson', async () => {
    const partners = [{ partnerId: 2 }, { partnerId: 3 }]
    const personData = { name: 'Joe', partners }
    const newPerson = await person.createPerson(undefined, personData)
    expect(newPerson).toMatchSnapshot()
    // TODO:  test relation creation
  })

  it('createPerson - no partners', async () => {
    const partners = []
    const personData = { name: 'Joe', partners }
    const newPerson = await person.createPerson(undefined, personData)
    expect(newPerson).toMatchSnapshot()
    // TODO:  test relation creation
  })

  it('updatePerson', async () => {
    const partners = [{ partnerId: 2 }, { partnerId: 3 }]
    const personData = { id: 1, name: 'Joe', partners }
    const updatedPerson = await person.updatePerson(undefined, personData)
    expect(updatedPerson).toMatchSnapshot()
    // TODO:  test relation creation/deletion
  })

  it('removePerson', async () => {
    const personData = { id: 1 }
    const result = await person.removePerson(undefined, personData)
    expect(result).toBe(true)
    // TODO:  test relation creation/deletion
  })

  it('removePerson, no partners', async () => {
    const personData = { id: 17 }
    const result = await person.removePerson(undefined, personData)
    expect(result).toBe(true)
    // TODO:  test relation creation/deletion
  })
})
