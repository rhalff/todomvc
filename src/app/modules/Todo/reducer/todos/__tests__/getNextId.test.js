import getNextId from '../getNextId'

describe('getNextId', () => {
  it('should create initial id', () => {
    expect(getNextId([])).toEqual(1)
  })
  it('should iterate id', () => {
    expect(getNextId([{ id: 1 }, { id: 3 }])).toEqual(4)
  })
})
