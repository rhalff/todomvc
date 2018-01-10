// @flow
import React from 'react'
import styles from './scss/ItemCounter.scss'

type Props = {
  itemCount: number
}

const ItemCounter = ({ itemCount }: Props) => (
  <div className={styles.itemCounter}>
    <span>
      {itemCount} {itemCount === 1 ? 'item' : 'items'} left
    </span>
  </div>
)

export default ItemCounter
