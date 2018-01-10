import toggleComplete from '../toggleComplete'

describe('toggleComplete', () => {
  it('can toggle complete', () => {
    expect(toggleComplete([{ id: 1, text: '1' }], true)).toEqual([
      { id: 1, text: '1', completed: true }
    ])

    expect(toggleComplete([{ id: 1, text: '1' }], false)).toEqual([
      { id: 1, text: '1', completed: false }
    ])
  })
})
