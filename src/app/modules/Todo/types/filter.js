// @flow
export type ItemFilter = 'ALL' | 'ACTIVE' | 'COMPLETED'

export type FilterState = {
  +visibilityFilter: ItemFilter
}

export type FilterAction = {
  type: 'FILTER/ITEMS',
  +payload: ItemFilter
}
