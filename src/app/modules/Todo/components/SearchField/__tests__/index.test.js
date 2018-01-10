// @flow
import React from 'react'
import SearchField from '../'
import renderer from 'react-test-renderer'

test('Can show SearchField', () => {
  const component = renderer.create(<SearchField onChange={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Can show SearchField (checked)', () => {
  const component = renderer.create(<SearchField onChange={() => {}} checked />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
