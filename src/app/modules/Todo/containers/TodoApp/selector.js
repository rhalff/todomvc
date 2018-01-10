// @flow
import type { Todos } from '../../types/todos'
import type { ItemFilter } from '../../types/filter'

type Args = {
  todo: {
    filter: ItemFilter,
    todos: Todos
  }
}

export default function selector({ todo: { filter, todos } }: Args) {
  return {
    items: todos,
    itemFilter: filter,
    placeholder: 'What needs to be done?'
  }
}
