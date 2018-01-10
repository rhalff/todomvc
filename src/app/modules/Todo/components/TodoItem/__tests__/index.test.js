// @flow
import React from 'react'
import TodoItem from '../'
import renderer from 'react-test-renderer'

const todo = { id: 1, text: 'Test Todo' }

test('Can show Todo Item', () => {
  const component = renderer.create(<TodoItem onClick={() => {}} item={todo} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
