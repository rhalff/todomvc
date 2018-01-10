import React from 'react'
import InputField from '../'
import renderer from 'react-test-renderer'

test('Can show input field', () => {
  const component = renderer.create(
    <InputField placeholder="What needs to be done?" onSubmit={() => {}} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Empty input reverts to original value', () => {})
