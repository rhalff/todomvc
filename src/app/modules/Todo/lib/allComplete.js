// @flow
import filterItems from './filterItems'
import type { Todos } from '../types/todos'

export default function allComplete(items: Todos) {
  return filterItems('ACTIVE', items).length === 0
}
