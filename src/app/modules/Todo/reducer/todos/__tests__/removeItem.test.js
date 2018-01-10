import removeItem from '../removeItem'

describe('removeItem', () => {
  it('can remove an item', () => {
    expect(
      removeItem(
        [{ id: 1, text: '1' }, { id: 2, text: '2' }, { id: 3, text: '3' }],
        2
      )
    ).toEqual([{ id: 1, text: '1' }, { id: 3, text: '3' }])
  })

  it('throws if item is not found', () => {
    expect(() => removeItem([], 2)).toThrowError(/Cannot find item/)
  })
})
