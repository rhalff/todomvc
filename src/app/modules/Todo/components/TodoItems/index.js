// @flow
import React, { PureComponent } from 'react'
import styles from './scss/TodoItems.scss'
import TodoItem from '../TodoItem'
import type { Todos } from '../../types/todos'

type Props = {
  items: Todos,
  onRemoveItem: Function,
  onSaveItem: Function,
  onToggleItemComplete: Function
}

class TodoItems extends PureComponent<Props> {
  renderItems = () => {
    const { items, onRemoveItem, onSaveItem, onToggleItemComplete } = this.props

    return items.map(item => (
      <li key={item.id}>
        <TodoItem
          item={item}
          onRemove={onRemoveItem}
          onSave={onSaveItem}
          onToggleComplete={onToggleItemComplete}
        />
      </li>
    ))
  }

  render() {
    return (
      <section className={styles.main}>
        <ul className={styles.todoItems}>{this.renderItems()}</ul>
      </section>
    )
  }
}

export default TodoItems
