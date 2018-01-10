// @flow
import React, { PureComponent } from 'react'
import styles from './scss/TodoHeader.scss'
import InputField from '../InputField'
import ToggleComplete from '../ToggleComplete'
import { allComplete } from '../../lib'
import type { Todos } from '../../types/todos'

type Props = {
  items: Todos,
  onCreate: Function,
  onToggleComplete: Function,
  placeholder: string
}

class TodoHeader extends PureComponent<Props> {
  toggleComplete = ({ target }: SyntheticEvent<HTMLInputElement>) => {
    if (target instanceof HTMLInputElement) {
      this.props.onToggleComplete(target.checked)
    }
  }

  render() {
    const { items, onCreate, placeholder } = this.props

    return (
      <header className={styles.todoHeader}>
        {items.length > 0 && (
          <ToggleComplete
            onChange={this.toggleComplete}
            checked={allComplete(items)}
          />
        )}
        <InputField placeholder={placeholder} onSubmit={onCreate} />
        <div />
      </header>
    )
  }
}

export default TodoHeader
