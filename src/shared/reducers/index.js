import { combineReducers } from 'redux'

import todo from '../../app/modules/Todo/reducer'

const rootReducer = combineReducers({
  todo
})

export default rootReducer
