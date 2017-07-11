import Iota from 'iota.lib.js'

import generateSeed from '../'


describe('when generating an iota seed', () => {
  const iota = new Iota()
  let seed

  beforeAll(async () => {
    seed = await generateSeed()
  })

  it('should have 81 characters', () => {
    expect(seed.length).toEqual(81)
  })

  it('should be a valid iota seed', () => {
    expect(iota.valid.isTrytes(seed)).toBeTruthy()
  })
})
