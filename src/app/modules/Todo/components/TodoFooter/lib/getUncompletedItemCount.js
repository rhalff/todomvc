// @flow
import type { Todos } from '../../../types/todos'

export default function getUncompletedItemCount(items: Todos) {
  return items.filter(item => !item.completed).length
}
