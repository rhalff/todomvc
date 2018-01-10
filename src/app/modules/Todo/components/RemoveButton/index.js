// @flow
import React from 'react'
import styles from './scss/RemoveButton.scss'

type Props = {
  onClick: () => void
}

const RemoveButton = ({ onClick }: Props) => (
  <button className={styles.removeButton} onClick={onClick}>
    ×
  </button>
)

export default RemoveButton
