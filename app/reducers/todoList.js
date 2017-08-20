import { ADD_NEW_TODO, DELETE_TODO, MODIFY_TODO, TOGGLE_TODO, EDIT_TODO, SHOW_EDIT_BOX } from '../actions/todoList'
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todoList'

const { SHOW_ALL } = VisibilityFilters

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}

export function todos(state = [], action) {
  switch (action.type) {
  case ADD_NEW_TODO:
    return [
      ...state,
      {
        content: action.text,
        completed: false,
        editContent: '',
        editable: false
      }
    ]
  case DELETE_TODO:
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ]
  case SHOW_EDIT_BOX:
    return [
      ...state.slice(0, action.index), 
      Object.assign({}, state[action.index], {
        editable: !state[action.index].editable,
        editContent: state[action.index].content
      }),
      ...state.slice(action.index + 1)
    ]
  case MODIFY_TODO:
    return [
      ...state.slice(0, action.index), 
      Object.assign({}, state[action.index], {
        content: state[action.index].editContent,
      }),
      ...state.slice(action.index + 1)
    ]
  case EDIT_TODO:
    return [
      ...state.slice(0, action.index), 
      Object.assign({}, state[action.index], {
        editContent: action.text
      }),
      ...state.slice(action.index + 1)
    ]
  case TOGGLE_TODO:
    return [
      ...state.slice(0, action.index), 
      Object.assign({}, state[action.index], {
        completed: !state[action.index].completed
      }),
      ...state.slice(action.index + 1)
    ] 
  default:
    return state
  }
}


