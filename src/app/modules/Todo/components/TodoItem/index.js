// @flow
import React, { PureComponent } from 'react'
import styles from './scss/TodoItem.scss'
import Checkbox from '../Checkbox'
import LabelEditor from '../LabelEditor'
import RemoveButton from '../RemoveButton'
import type { Todo } from '../../types/todos'

type Props = {
  item: Todo,
  onRemove: (item: Todo) => void,
  onSave: (text: string, item: Todo) => void,
  onToggleComplete: (item: Todo) => void
}

class TodoItem extends PureComponent<Props> {
  onRemove = () => {
    this.props.onRemove(this.props.item)
  }

  onToggleComplete = () => {
    this.props.onToggleComplete(this.props.item)
  }

  onSave = (text: string) => {
    this.props.onSave(text, this.props.item)
  }

  render() {
    const { item } = this.props

    return (
      <div className={item.completed ? styles.completed : styles.active}>
        <Checkbox checked={item.completed} onChange={this.onToggleComplete} />
        <LabelEditor text={item.text} onSave={this.onSave} />
        <RemoveButton onClick={this.onRemove} />
      </div>
    )
  }
}

export default TodoItem
