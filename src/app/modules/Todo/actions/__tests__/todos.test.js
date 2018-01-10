// @flow
import {
  clearCompleted,
  createTodo,
  saveTodo,
  toggleComplete,
  toggleTodoComplete,
  removeTodo
} from '../todos'

import { TODOS } from '../../constants'

describe('Todo Actions', () => {
  it('clearCompleted', () => {
    expect(clearCompleted(true)).toEqual({
      type: TODOS.CLEAR_COMPLETED,
      payload: true
    })

    expect(clearCompleted(false)).toEqual({
      type: TODOS.CLEAR_COMPLETED,
      payload: false
    })
  })

  it('createTodo', () => {
    expect(createTodo('My Todo')).toEqual({
      type: TODOS.CREATE_TODO,
      payload: 'My Todo'
    })
  })

  it('saveTodo', () => {
    expect(
      saveTodo('My Todo', {
        id: 1,
        text: 'new text',
        completed: true
      })
    ).toEqual({
      type: TODOS.SAVE_TODO,
      payload: {
        id: 1,
        text: 'My Todo',
        completed: true
      }
    })
  })

  it('toggleComplete', () => {
    expect(toggleComplete(true)).toEqual({
      type: TODOS.TOGGLE_COMPLETE,
      payload: true
    })

    expect(toggleComplete(false)).toEqual({
      type: TODOS.TOGGLE_COMPLETE,
      payload: false
    })
  })

  it('toggleTodoComplete', () => {
    expect(
      toggleTodoComplete({
        id: 1,
        text: 'My Todo'
      })
    ).toEqual({
      type: TODOS.TOGGLE_ITEM_COMPLETE,
      payload: {
        id: 1,
        text: 'My Todo'
      }
    })
  })

  it('removeTodo', () => {
    expect(
      removeTodo({
        id: 1,
        text: 'My Todo'
      })
    ).toEqual({
      type: TODOS.REMOVE_TODO,
      payload: {
        id: 1,
        text: 'My Todo'
      }
    })
  })
})
