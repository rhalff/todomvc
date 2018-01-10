// @flow
import React from 'react'

import renderer from 'react-test-renderer'

import ButtonBar from '../index'

const buttons = [
  { name: 'ALL', active: true },
  { name: 'ACTIVE' },
  { name: 'COMPLETED' }
]

test('Can show Buttonbar', () => {
  const component = renderer.create(<ButtonBar buttons={buttons} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
