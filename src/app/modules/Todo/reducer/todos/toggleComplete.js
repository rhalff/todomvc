// @flow
import type { Todos } from '../../types/todos'

export default function toggleComplete(todos: Todos, value: boolean): Todos {
  return todos.map(todo => ({
    ...todo,
    completed: value
  }))
}
