// @flow
import allComplete from '../allComplete'

describe('allComplete', () => {
  it('can test whether all items are complete', () => {
    expect(
      allComplete([
        { id: 1, text: 'Todo 1', completed: true },
        { id: 2, text: 'Todo 2', completed: false }
      ])
    ).toEqual(false)

    expect(
      allComplete([
        { id: 1, text: 'Todo 1', completed: true },
        { id: 2, text: 'Todo 2', completed: true }
      ])
    ).toEqual(true)
  })
})
