// @flow
import { itemFilter } from '../filter'
import { FILTER } from '../../constants'

describe('filter', () => {
  it('can filter all completed items', () => {
    expect(itemFilter('COMPLETED')).toEqual({
      type: FILTER.ITEMS,
      payload: 'COMPLETED'
    })
  })
})
