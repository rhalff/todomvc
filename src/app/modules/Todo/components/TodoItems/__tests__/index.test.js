// @flow
import React from 'react'
import TodoItems from '../'
import renderer from 'react-test-renderer'

const todos = [
  { id: 1, text: 'Style & compose all components' },
  { id: 2, text: 'App Init', completed: true },
  { id: 3, text: 'Copy Styles one on one' }
]

test('Can show Todo Items', () => {
  const component = renderer.create(
    <TodoItems items={todos} onSaveItem={() => {}} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
