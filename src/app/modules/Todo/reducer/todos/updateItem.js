// @flow
import type { Todos, Todo } from '../../types/todos'

export default function updateItem(todos: Todos, updatedItem: Todo): Todos {
  return todos.map(item => {
    if (item.id === updatedItem.id) {
      return {
        ...item,
        ...updatedItem
      }
    }

    return item
  })
}
