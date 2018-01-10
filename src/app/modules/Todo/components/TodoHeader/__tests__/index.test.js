// @flow
import React from 'react'
import TodoHeader from '../'
import renderer from 'react-test-renderer'

const todos = [{ id: 1, text: 'Test Todo' }, { id: 2, text: 'Test Todo 2' }]

test('Can show Todo Header', () => {
  const component = renderer.create(
    <TodoHeader
      items={todos}
      onCreate={() => {}}
      placeholder="What needs to be done?"
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
