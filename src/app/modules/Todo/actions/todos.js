// @flow
import { TODOS } from '../constants'

import type {
  Todo,
  TodosActionCreateTodo,
  TodosActionToggleComplete,
  TodosActionToggleItemComplete,
  TodosActionSaveTodo,
  TodosActionRemoveTodo,
  TodosActionClearCompleted
} from '../types/todos'

export function clearCompleted(payload: boolean): TodosActionClearCompleted {
  return {
    type: TODOS.CLEAR_COMPLETED,
    payload
  }
}

export function createTodo(payload: string): TodosActionCreateTodo {
  return {
    type: TODOS.CREATE_TODO,
    payload
  }
}

export function saveTodo(text: string, item: Todo): TodosActionSaveTodo {
  return {
    type: TODOS.SAVE_TODO,
    payload: {
      ...item,
      text
    }
  }
}

export function toggleComplete(payload: boolean): TodosActionToggleComplete {
  return {
    type: TODOS.TOGGLE_COMPLETE,
    payload
  }
}

export function toggleTodoComplete(
  payload: Todo
): TodosActionToggleItemComplete {
  return {
    type: TODOS.TOGGLE_ITEM_COMPLETE,
    payload
  }
}

export function removeTodo(payload: Todo): TodosActionRemoveTodo {
  return {
    type: TODOS.REMOVE_TODO,
    payload
  }
}
