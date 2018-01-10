// @flow
import type { Id, Todos } from '../../types/todos'

export default function removeItem(items: Todos, itemId: Id): Todos | Error {
  const index = items.findIndex(item => item.id === itemId)

  if (index >= 0) {
    const newItems = items.slice()

    newItems.splice(index, 1)

    return newItems
  } else {
    throw Error(`Cannot find item with id ${itemId}`)
  }
}
