// @flow
import { FILTER } from '../constants'
import type { FilterAction, ItemFilter } from '../types/filter'

export function itemFilter(payload: ItemFilter): FilterAction {
  return {
    type: FILTER.ITEMS,
    payload
  }
}
