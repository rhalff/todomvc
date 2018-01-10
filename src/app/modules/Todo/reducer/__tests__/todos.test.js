// @flow
import todosReducer from '../todosReducer'
import TODOS from '../../constants/todos'

const todos = [
  { id: 1, text: 'Test 1', completed: true },
  { id: 2, text: 'Test 2' }
]

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })

  it('create todo', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.CREATE_TODO,
        payload: 'new todo'
      })
    ).toEqual([
      { id: 1, text: 'Test 1', completed: true },
      { id: 2, text: 'Test 2' },
      { id: 3, text: 'new todo', completed: false }
    ])
  })

  it('toggle complete', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.TOGGLE_COMPLETE,
        payload: true
      })
    ).toEqual([
      { id: 1, text: 'Test 1', completed: true },
      { id: 2, text: 'Test 2', completed: true }
    ])
  })

  it('toggle item complete', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.TOGGLE_ITEM_COMPLETE,
        payload: { id: 2 }
      })
    ).toEqual([
      { id: 1, text: 'Test 1', completed: true },
      { id: 2, text: 'Test 2', completed: true }
    ])
  })

  it('toggle save todo', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.SAVE_TODO,
        payload: {
          id: 2,
          text: 'Test!',
          completed: false
        }
      })
    ).toEqual([
      { id: 1, text: 'Test 1', completed: true },
      { id: 2, text: 'Test!', completed: false }
    ])
  })

  it('toggle remove todo', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.REMOVE_TODO,
        payload: {
          id: 2
        }
      })
    ).toEqual([{ id: 1, text: 'Test 1', completed: true }])
  })

  it('toggle clear completed', () => {
    expect(
      todosReducer(todos, {
        type: TODOS.REMOVE_TODO,
        payload: {
          id: 2
        }
      })
    ).toEqual([{ id: 1, text: 'Test 1', completed: true }])
  })
})
