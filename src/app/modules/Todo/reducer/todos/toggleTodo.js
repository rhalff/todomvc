// @flow
import type { Todos, Id } from '../../types/todos'

export default function toggleTodo(todos: Todos, id: Id): Todos {
  return todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }

    return todo
  })
}
