// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import decorator from '../../.storybook/decorator'
import configureStore from '../shared/configureStore'
import {
  ButtonBar,
  Checkbox,
  ClearCompletedButton,
  InputField,
  ItemCounter,
  LabelEditor,
  RemoveButton,
  Todo,
  TodoFooter,
  TodoHeader,
  TodoItem,
  TodoItems,
  ToggleComplete
} from './modules/Todo/components'
import TodoApp from './modules/Todo/containers/TodoApp/index'

const todos = [
  {
    id: 0,
    text: 'Done Foo.',
    completed: true
  },
  {
    id: 1,
    text: 'Do Bar.',
    completed: false
  }
]

const store = configureStore({
  todo: {
    filter: 'ALL',
    todos
  }
})

storiesOf('Todo', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(decorator)
  .add('Todo App', () => <TodoApp />)
  .add('Todo', () => (
    <Todo
      onClearCompleted={action('onClearCompleted')}
      onCreateItem={action('Create Todo')}
      onFilterClick={action('onFilterClick')}
      onRemoveItem={action('onRemoveItem')}
      onSaveItem={action('onSaveItem')}
      onToggleItemComplete={action('onToggleItemComplete')}
      onToggleComplete={action('onToggleComplete')}
      placeholder="What needs to be done?"
      items={todos}
      todos={todos}
    />
  ))
  .add('Todo Header', () => (
    <TodoHeader
      items={todos}
      onCreate={action('Create Todo')}
      onToggleComplete={action('onToggleComplete')}
      placeholder="What needs to be done?"
    />
  ))
  .add('Todo Items', () => (
    <TodoItems
      items={todos}
      onSaveItem={action('Updated Todo')}
      onRemoveItem={action('Remove Todo')}
      onToggleItemComplete={action('toggleComplete')}
    />
  ))
  .add('TodoItem', () => (
    <div>
      <TodoItem
        item={{
          id: 0,
          text: 'Done Foo.',
          completed: true
        }}
        onToggleComplete={action('toggleComplete')}
        onClick={action('clicked')}
      />
      <TodoItem
        item={{
          id: 1,
          text: 'Do Bar.',
          completed: false
        }}
        onToggleComplete={action('toggleComplete')}
        onClick={action('clicked')}
      />
    </div>
  ))
  .add('Todo Footer', () => (
    <TodoFooter
      items={todos}
      onFilterClick={action('onFilterClick')}
      onClearCompleted={action('onClearCompleted')}
    />
  ))
  .add('Input Field', () => {
    return (
      <InputField
        placeholder="What needs to be done?"
        onSubmit={action('submit')}
      />
    )
  })
  .add('ToggleComplete', () => (
    <div>
      <ToggleComplete onChange={action('onChange')} />
      <ToggleComplete onChange={action('onChange')} checked={true} />
    </div>
  ))
  .add('Checkbox', () => (
    <div>
      <Checkbox onChange={action('checked')} />
      <Checkbox onChange={action('checked')} checked />
    </div>
  ))
  .add('ButtonBar', () => {
    const buttons = [
      { name: 'ALL' },
      { name: 'ACTIVE', active: true },
      { name: 'COMPLETED' }
    ]

    return (
      <div>
        <ButtonBar buttons={buttons} filter="ALL" onClick={action('onClick')} />
        <ButtonBar
          buttons={buttons}
          filter="ACTIVE"
          onClick={action('onClick')}
        />
        <ButtonBar
          buttons={buttons}
          filter="COMPLETED"
          onClick={action('onClick')}
        />
      </div>
    )
  })
  .add('Item Counter', () => (
    <div>
      <ItemCounter itemCount={0} />
      <ItemCounter itemCount={1} />
      <ItemCounter itemCount={2} />
      <ItemCounter itemCount={10} />
    </div>
  ))
  .add('RemoveButton ', () => {
    return <RemoveButton />
  })
  .add('Clear Completed Button', () => {
    return <ClearCompletedButton onClear={action('Clear Completed')} />
  })
  .add('Label Editor', () => {
    return <LabelEditor onSave={action('New Item')} text="My Todo" />
  })
