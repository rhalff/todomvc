// @flow
import React, { PureComponent } from 'react'
import styles from './scss/ClearCompletedButton.scss'

type Props = {
  /**
   * Callback triggered when
   */
  onClear: Function
}

class ClearCompletedButton extends PureComponent<Props> {
  onClearCompleted = () => {
    this.props.onClear()
  }

  render() {
    return (
      <button
        className={styles.clearCompletedButton}
        onClick={this.onClearCompleted}
      >
        Clear completed
      </button>
    )
  }
}

export default ClearCompletedButton
