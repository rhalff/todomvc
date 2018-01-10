import createTodo from '../createTodo'

describe('Create Todo', () => {
  it('should create new todo state', () => {
    expect(createTodo(2, 'My Todo')).toEqual({
      id: 2,
      text: 'My Todo',
      completed: false
    })
  })
})
