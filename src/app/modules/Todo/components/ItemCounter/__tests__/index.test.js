// @flow
import React from 'react'
import ItemCounter from '../'
import renderer from 'react-test-renderer'

test('Can show item count', () => {
  const component = renderer.create(
    <ItemCounter
      items={[{ id: 1, text: 'Test Todo' }, { id: 2, text: 'Test Todo 2' }]}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
