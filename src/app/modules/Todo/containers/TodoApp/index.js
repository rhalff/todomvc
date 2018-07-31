// @flow
import { connect } from 'react-redux'
import Todo from '../../components/Todo'
import selector from './selector'
import {
  clearCompleted,
  createTodo,
  removeTodo,
  saveTodo,
  toggleComplete,
  toggleTodoComplete
} from '../../actions/todos'
import { itemFilter } from '../../actions/filter'

export default connect(
  selector,
  {
    onCreateItem: createTodo,
    onClearCompleted: clearCompleted,
    onFilterClick: itemFilter,
    onRemoveItem: removeTodo,
    onSaveItem: saveTodo,
    onToggleComplete: toggleComplete,
    onToggleItemComplete: toggleTodoComplete
  }
)(Todo)
