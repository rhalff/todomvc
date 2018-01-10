// @flow
import React from 'react'
import styles from './scss/SearchField.scss'

type Props = {
  checked: boolean,
  onChange: Function
}

const SearchField = ({ checked, onChange }: Props) => (
  <input
    className={checked ? styles.checked : styles.unchecked}
    type="checkbox"
    checked={checked}
    onChange={onChange}
  />
)

export default SearchField
