import { visibilityFilter, todos } from './todoList'
import { formData } from './userDialog'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  formData
})

export default todoApp
