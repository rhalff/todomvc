// @flow
import type { Id, Todo } from '../../types/todos'

export default function createTodo(id: Id, text: string): Todo {
  return {
    id,
    text,
    completed: false
  }
}
