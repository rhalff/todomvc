// @flow
import React, { Component } from 'react'
import styles from './scss/InputField.scss'

type Props = {
  onSubmit: Function,
  placeholder: string
}

type State = {
  value: string
}

class InputField extends Component<Props, State> {
  inputElement: ?HTMLInputElement

  state = {
    value: ''
  }

  handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault()

    const value = this.state.value.trim()

    if (value) {
      this.props.onSubmit(value)
      this.setState({ value: '' })
    }
  }

  handleChange = () => {
    if (this.inputElement) {
      this.setState({ value: this.inputElement.value })
    }
  }

  setInputRef = (ref: ?HTMLInputElement) => {
    this.inputElement = ref
  }

  render() {
    const { placeholder } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.edit}
          onChange={this.handleChange}
          placeholder={placeholder}
          ref={this.setInputRef}
          type="text"
          value={this.state.value}
        />
      </form>
    )
  }
}

export default InputField
