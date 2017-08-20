export const CHANGE_FORMDATA = 'CHANGE_FORMDATA'

export function changeFormData(key, value){
  return{
    type: CHANGE_FORMDATA,
    key,
    value
  }
}