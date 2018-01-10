// @flow
import React, { PureComponent, type Node } from 'react'
import styles from './scss/ListItem.scss'

type Props = {
  children?: Node,
  name: string,
  /**
   * Callback which will execute when item is clicked.
   */
  onClick: Function
}

class ListItem extends PureComponent<Props> {
  onClick = (event: SyntheticEvent<HTMLElement>) => {
    const { name } = this.props

    event.preventDefault()

    this.props.onClick(name)
  }

  render() {
    const { children } = this.props

    return (
      <li className={styles.listItem} onClick={this.onClick}>
        {children}
      </li>
    )
  }
}

export default ListItem
