// @flow
import { handleActions } from 'redux-actions'

import { TODOS } from '../constants/'
import type {
  Todos,
  TodosActionCreateTodo,
  TodosActionToggleComplete,
  TodosActionToggleItemComplete,
  TodosActionSaveTodo,
  TodosActionRemoveTodo,
  TodosActionClearCompleted
} from '../types/todos'

import {
  createTodo,
  getNextId,
  removeItem,
  toggleComplete,
  toggleTodo,
  updateItem
} from './todos/index'

const initialState: Todos = []

export default handleActions(
  {
    [TODOS.CREATE_TODO]: (state: Todos, { payload }: TodosActionCreateTodo) => [
      ...state,
      createTodo(getNextId((state: Todos)), payload)
    ],

    [TODOS.TOGGLE_COMPLETE]: (
      state: Todos,
      { payload }: TodosActionToggleComplete
    ) => toggleComplete(state, payload),

    [TODOS.TOGGLE_ITEM_COMPLETE]: (
      state: Todos,
      { payload }: TodosActionToggleItemComplete
    ) => toggleTodo(state, payload.id),

    [TODOS.SAVE_TODO]: (state: Todos, { payload }: TodosActionSaveTodo) =>
      updateItem(state, payload),

    [TODOS.REMOVE_TODO]: (state: Todos, { payload }: TodosActionRemoveTodo) =>
      removeItem(state, payload.id),

    [TODOS.CLEAR_COMPLETED]: (
      state: Todos,
      { payload }: TodosActionClearCompleted
    ) => state.filter(todo => !todo.completed)
  },
  initialState
)
