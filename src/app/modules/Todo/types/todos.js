// @flow
export type Id = number

export type Todo = {
  +id: Id,
  +text: string,
  +completed: boolean
}

export type TodoIdentity = {
  +id: Id,
  +text?: string,
  +completed?: boolean
}

export type Todos = Array<Todo>

export type TodosState = {
  +todos: Todos
}

export type TodosActionClearCompleted = {
  +type: 'TODOS/CLEAR_COMPLETED'
}

export type TodosActionCreateTodo = {
  +type: 'TODOS/CREATE_TODO',
  +payload: string
}

export type TodosActionRemoveTodo = {
  +type: 'TODOS/REMOVE_TODO',
  +payload: TodoIdentity
}

export type TodosActionSaveTodo = {
  +type: 'TODOS/SAVE_TODO',
  +payload: Todo
}

export type TodosActionToggleTodo = {
  +type: 'TODOS/TOGGLE_TODO',
  +payload: TodoIdentity
}

export type TodosActionToggleComplete = {
  +type: 'TODOS/TOGGLE_COMPLETE',
  +payload: boolean
}

export type TodosActionToggleItemComplete = {
  +type: 'TODOS/TOGGLE_TODO_COMPLETE',
  +payload: TodoIdentity
}

export type TodosAction =
  | TodosActionCreateTodo
  | TodosActionRemoveTodo
  | TodosActionSaveTodo
  | TodosActionToggleTodo
  | TodosActionToggleComplete
  | TodosActionToggleItemComplete
  | TodosActionClearCompleted
