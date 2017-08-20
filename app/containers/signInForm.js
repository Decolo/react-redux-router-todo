import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { changeFormData } from '../actions/userDialog'


function SignInForm(props){
  const { dispatch } = props
  function onChangeFormData(event, key){
    dispatch(changeFormData(key, event.target.value))
  }
  return (
    <form className="sign-in">
      <div className="row">
        <label htmlFor="username"><i className="iconfont icon-yonghu"></i></label>
        <input 
          type="text" 
          id="username" 
          onChange={(event) => {
            onChangeFormData(event, 'username') 
          }}
          placeholder="username"
        />
      </div>
      <div className="row">
        <label htmlFor="password"><i className="iconfont icon-suoding"></i></label>
        <input 
          type="password"
          id="password" 
          onChange={(event) => {
            onChangeFormData(event, 'password')
          }}
          placeholder="password"
        /> 
      </div>
      <div className="row action">
        <button type="submit">Sign In</button>
        <p>Need an account<Link to='/login/signUp'>Sign Up</Link></p>
      </div>
      <a href="#"  className="forget-password">Forget password</a>
    </form>)
}
export default connect((state) => ({
  formData: state.formData
}))(SignInForm)