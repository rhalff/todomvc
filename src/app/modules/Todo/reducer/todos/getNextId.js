// @flow
import type { Id, Todos } from '../../types/todos'

const startId = 1

export default function getNextId(state: Todos): Id {
  if (state.length) {
    return state[state.length - 1].id + 1
  }

  return startId
}
