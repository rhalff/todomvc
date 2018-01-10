// @flow
import type { ItemFilter } from '../types/filter'
import type { Todos } from '../types/todos'

export default function filterItems(type: ItemFilter, items: Todos) {
  if (type === 'COMPLETED') {
    return items.filter(item => item.completed)
  }

  if (type === 'ACTIVE') {
    return items.filter(item => !item.completed)
  }

  return items
}
