// @flow
import React from 'react'
import RemoveButton from '../'
import renderer from 'react-test-renderer'

test('Can show RemoveButton', () => {
  const component = renderer.create(<RemoveButton onChange={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Can show RemoveButton (checked)', () => {
  const component = renderer.create(
    <RemoveButton onChange={() => {}} checked />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
