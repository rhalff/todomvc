// @flow
import React from 'react'
import Todo from '../index'
import renderer from 'react-test-renderer'

const todos = [
  { id: 1, text: 'Style & compose all components' },
  { id: 2, text: 'App Init', completed: true },
  { id: 3, text: 'Copy Styles one on one' }
]

test('Can show Todo', () => {
  const component = renderer.create(
    <Todo
      itemFilter={() => {}}
      items={todos}
      onCreateItem={() => {}}
      onClearCompleted={() => {}}
      onFilterClick={() => {}}
      onToggleComplete={() => {}}
      onToggleItemComplete={() => {}}
      onRemoveItem={() => {}}
      onSaveItem={() => {}}
      placeholder="What needs to be done?"
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
