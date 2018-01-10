// @flow
import React from 'react'
import Checkbox from '../'
import renderer from 'react-test-renderer'

test('Can show CheckBox', () => {
  const component = renderer.create(<Checkbox onChange={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Can show CheckBox (checked)', () => {
  const component = renderer.create(<Checkbox onChange={() => {}} checked />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
