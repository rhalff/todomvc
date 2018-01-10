// @flow
import React from 'react'
import TodoFooter from '../'
import renderer from 'react-test-renderer'

const todos = [{ id: 1, text: 'Test Todo' }, { id: 2, text: 'Test Todo 2' }]

test('Can show Todo Footer', () => {
  const component = renderer.create(
    <TodoFooter
      items={todos}
      onFilterClick={() => {}}
      onClearCompleted={() => {}}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
