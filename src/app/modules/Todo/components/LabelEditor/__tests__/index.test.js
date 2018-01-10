// @flow
import React from 'react'
import LabelEditor from '../'
import renderer from 'react-test-renderer'

test('Can show CheckBox', () => {
  const component = renderer.create(
    <LabelEditor onSave={() => {}} text="Test LabelEditor" />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Can show CheckBox (checked)', () => {
  const component = renderer.create(<LabelEditor onChange={() => {}} checked />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
