// @flow
import React from 'react'
import styles from './scss/FilterButton.scss'

type Props = {
  active: boolean,
  name: string,
  title: string
}

const FilterButton = ({ active, name, title }: Props) => (
  <a
    name={name}
    href={`/#${name}`}
    className={active ? styles.active : styles.filterButton}
  >
    {title || name}
  </a>
)

export default FilterButton
