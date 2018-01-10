// @flow
import React from 'react'
import styles from './scss/TodoFooter.scss'
import ItemCounter from '../ItemCounter'
import ButtonBar from '../ButtonBar'
import ClearCompletedButton from '../ClearCompletedButton'
import { getUncompletedItemCount, hasCompletedItems } from './lib'

import type { Todos } from '../../types/todos'
import type { Buttons } from '../../types/buttons'

const filterList: Buttons = [
  {
    name: 'ALL',
    title: 'All'
  },
  {
    name: 'ACTIVE',
    title: 'Active'
  },
  {
    name: 'COMPLETED',
    title: 'Completed'
  }
]

type Props = {
  filter: string,
  items: Todos,
  onClearCompleted: Function,
  onFilterClick: Function
}

const TodoFooter = ({
  filter,
  items,
  onClearCompleted,
  onFilterClick
}: Props) => (
  <footer className={styles.todoFooter}>
    <ItemCounter itemCount={getUncompletedItemCount(items)} />
    <ButtonBar buttons={filterList} filter={filter} onClick={onFilterClick} />
    {hasCompletedItems(items) && (
      <ClearCompletedButton onClear={onClearCompleted} />
    )}
  </footer>
)

export default TodoFooter
