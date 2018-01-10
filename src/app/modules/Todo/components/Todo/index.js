// @flow
import React from 'react'
import styles from './scss/Todo.scss'
import TodoHeader from '../TodoHeader/index'
import TodoItems from '../TodoItems/index'
import TodoFooter from '../TodoFooter/index'
import filterItems from '../../lib/filterItems'
import type { Todos } from '../../types/todos'
import type { ItemFilter } from '../../types/filter'

type Props = {
  itemFilter: ItemFilter,
  items: Todos,
  onCreateItem: Function,
  onClearCompleted: Function,
  onFilterClick: Function,
  onToggleComplete: Function,
  onToggleItemComplete: Function,
  onRemoveItem: Function,
  onSaveItem: Function,
  placeholder: string
}

const Todo = ({
  itemFilter,
  items,
  onCreateItem,
  onClearCompleted,
  onFilterClick,
  onToggleComplete,
  onToggleItemComplete,
  onRemoveItem,
  onSaveItem,
  placeholder
}: Props) => {
  let todoItems
  let todoFooter

  if (items.length) {
    todoItems = (
      <TodoItems
        items={filterItems(itemFilter, items)}
        onRemoveItem={onRemoveItem}
        onSaveItem={onSaveItem}
        onToggleItemComplete={onToggleItemComplete}
      />
    )

    todoFooter = (
      <TodoFooter
        filter={itemFilter}
        items={items}
        onClearCompleted={onClearCompleted}
        onFilterClick={onFilterClick}
      />
    )
  }

  return (
    <section className={styles.app}>
      <h1>Todos</h1>
      <TodoHeader
        items={items}
        placeholder={placeholder}
        onCreate={onCreateItem}
        onToggleComplete={onToggleComplete}
      />
      {todoItems}
      {todoFooter}
    </section>
  )
}

export default Todo
