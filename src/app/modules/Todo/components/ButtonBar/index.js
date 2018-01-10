// @flow
import React, { PureComponent } from 'react'

import FilterButton from '../FilterButton/index'
import ListItem from '../ListItem/index'
import styles from './scss/Buttonbar.scss'

import type { Buttons } from '../../types/buttons'

type Props = {
  /**
   * List of buttons
   *
   *
   */
  buttons: Buttons,
  filter: string,
  onClick: Function
}

class ButtonBar extends PureComponent<Props> {
  render() {
    const { buttons, filter, onClick } = this.props

    return (
      <ul className={styles.buttonBar}>
        {buttons.map(button => (
          <ListItem onClick={onClick} key={button.name} name={button.name}>
            <FilterButton {...button} active={button.name === filter} />
          </ListItem>
        ))}
      </ul>
    )
  }
}

export default ButtonBar
