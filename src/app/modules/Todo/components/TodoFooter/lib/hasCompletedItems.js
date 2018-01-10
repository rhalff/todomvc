// @flow
import getUncompletedItemCount from './getUncompletedItemCount'
import type { Todos } from '../../../types/todos'

export default function hasCompletedItems(items: Todos) {
  return getUncompletedItemCount(items) !== items.length
}
