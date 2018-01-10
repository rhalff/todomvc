// @flow
import React from 'react'
import ClearCompletedButton from '../'
import renderer from 'react-test-renderer'

test('Can show clear completed', () => {
  const component = renderer.create(<ClearCompletedButton onClear={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
