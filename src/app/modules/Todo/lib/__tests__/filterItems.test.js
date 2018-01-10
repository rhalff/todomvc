// @flow
import filterItems from '../filterItems'

describe('filterItems', () => {
  it('can filter all completed items', () => {
    expect(
      filterItems('COMPLETED', [
        { id: 1, text: 'Todo 1', completed: true },
        { id: 2, text: 'Todo 2', completed: false }
      ])
    ).toEqual([{ id: 1, text: 'Todo 1', completed: true }])
  })

  it('can filter all active items', () => {
    expect(
      filterItems('ACTIVE', [
        { id: 1, text: 'Todo 1', completed: true },
        { id: 2, text: 'Todo 2', completed: false }
      ])
    ).toEqual([{ id: 2, text: 'Todo 2', completed: false }])
  })
})
