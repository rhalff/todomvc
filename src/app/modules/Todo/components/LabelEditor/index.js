// @flow
import React, { Component } from 'react'
import styles from './scss/LabelEditor.scss'
import { cleanText } from './lib'

type Props = {
  onSave: Function,
  text: string
}

type State = {
  editMode: boolean,
  text?: string
}

class LabelEditor extends Component<Props, State> {
  labelEditor: ?HTMLElement
  state = {
    editMode: false,
    text: ''
  }

  onDoubleClick = () => {
    if (!this.state.editMode) {
      this.setState(
        () => ({
          ...this.state,
          editMode: true
        }),
        () => {
          if (this.labelEditor) {
            this.labelEditor.focus()
          }
        }
      )
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      text: nextProps.text,
      editMode: false
    })
  }

  onKeyDown = (event: SyntheticEvent<HTMLElement>) => {
    const { onSave } = this.props

    if (this.labelEditor) {
      const text = cleanText(String(this.labelEditor.innerText))

      if (event.key === 'Enter') {
        const newState: State = {
          editMode: false
        }

        if (text) {
          onSave(text)
          newState.text = text
        } else {
          this.revertDomManipulation()
        }

        this.setState(newState)
      }
    }
  }

  revertDomManipulation() {
    if (this.labelEditor) {
      this.labelEditor.innerHTML = this.props.text
    }
  }

  render() {
    const { editMode, text } = this.state

    return (
      <div className={styles.labelEditor}>
        <div
          ref={el => (this.labelEditor = el)}
          contentEditable={editMode}
          onKeyDown={this.onKeyDown}
          onDoubleClick={this.onDoubleClick}
        >
          {text || this.props.text}
        </div>
      </div>
    )
  }
}

export default LabelEditor
