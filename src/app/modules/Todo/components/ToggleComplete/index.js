// @flow
import React from 'react'
import styles from './scss/ToggleComplete.scss'

type Props = {
  checked: boolean,
  onChange: Function
}

const ToggleComplete = ({ checked, onChange }: Props) => (
  <input
    className={checked ? styles.checked : styles.unchecked}
    type="checkbox"
    checked={checked}
    onChange={onChange}
  />
)

export default ToggleComplete
