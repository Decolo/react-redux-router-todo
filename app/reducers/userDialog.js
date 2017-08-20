import { CHANGE_FORMDATA } from '../actions/userDialog'
function formData(state = {}, action){
  const copyState = Object.assign({}, state)
  copyState[action.key] = action.value
  return action.type === CHANGE_FORMDATA? copyState : state
}
export default formData