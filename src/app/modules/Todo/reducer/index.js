// @flow
import { combineReducers } from 'redux'
import todos from './todosReducer'
import filter from './filterReducer'

export default combineReducers({
  todos,
  filter
})
