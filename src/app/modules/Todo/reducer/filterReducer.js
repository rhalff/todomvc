// @flow
import { handleActions } from 'redux-actions'
import { FILTER } from '../constants'
import type { ItemFilter, FilterAction } from '../types/filter'

const initialState: ItemFilter = 'ALL'

export default handleActions(
  {
    [FILTER.ITEMS]: (state: ItemFilter, { payload }: FilterAction) => payload
  },
  initialState
)
