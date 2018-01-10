import toggleTodo from '../toggleTodo'

describe('toggleTodo', () => {
  it('can toggle todo', () => {
    expect(toggleTodo([{ id: 1, text: '1' }], 1)).toEqual([
      { id: 1, text: '1', completed: true }
    ])

    expect(toggleTodo([{ id: 1, text: '1', completed: true }], 1)).toEqual([
      { id: 1, text: '1', completed: false }
    ])
  })
})
