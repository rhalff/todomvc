// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import FilterButton from '../index'

test('Can show FilterButton', () => {
  const component = renderer.create(<FilterButton onChange={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Can show FilterButton (active)', () => {
  const component = renderer.create(
    <FilterButton onChange={() => {}} checked />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
