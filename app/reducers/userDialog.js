import { CHANGE_FORMDATA } from '../actions/userDialog'

export function formData(state = {}, action){
  let copyState = Object.assign({}, state)
  copyState[action.key] = action.value
  return action.type === CHANGE_FORMDATA? copyState : state
}
