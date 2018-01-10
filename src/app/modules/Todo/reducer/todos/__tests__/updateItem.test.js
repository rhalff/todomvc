import updateItem from '../updateItem'

describe('updateItem', () => {
  it('can update item', () => {
    expect(
      updateItem([{ id: 1, text: 'Old Text', completed: false }], {
        id: 1,
        text: 'New Text',
        completed: true
      })
    ).toEqual([{ id: 1, text: 'New Text', completed: true }])
  })
})
