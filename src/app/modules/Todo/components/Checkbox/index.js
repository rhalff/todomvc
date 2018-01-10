// @flow
import React from 'react'
import styles from './scss/Checkbox.scss'

type Props = {
  /**
   *  Whether the component is checked
   */
  checked?: boolean,
  /**
   * Callback triggered when state is changed
   */
  onChange?: Function
}

const Checkbox = ({ checked, onChange }: Props) => {
  return (
    <input
      className={checked ? styles.checked : styles.unchecked}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Checkbox
