import knex from '../../connectors'
import PersonModel from '../person'

describe('PersonModel', () => {
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

  it('findAll', async () => {
    const persons = await PersonModel.findAll()
    expect(persons).toMatchSnapshot()
  })

  it('findById', async () => {
    const person = await PersonModel.findById(1)
    expect(person).toMatchSnapshot()
  })

  it('findByIds', async () => {
    const person = await PersonModel.findByIds([1, 2, 3])
    expect(person).toMatchSnapshot()
  })

  it('create', async () => {
    const person = await PersonModel.create({ name: 'Joe' })
    expect(person).toMatchSnapshot()
  })

  it('update', async () => {
    const person = await PersonModel.update({ id: 1, name: 'Joe' })
    expect(person).toMatchSnapshot()
  })
})
