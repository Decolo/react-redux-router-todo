export const CHANGE_FORMDATA = 'CHANGE_FORMDATA'
export const SHOW_SIGN_IN = 'SHOW_SIGN_IN'
export const SHOW_SIGN_UP = 'SHOW_SIGN_UP'
export const SHOW_FORGET_TAB = 'SHOW_FORGET_TAB'

export function changeFormData(key, value){
  return{
    type: CHANGE_FORMDATA,
    key,
    value
  }
}
