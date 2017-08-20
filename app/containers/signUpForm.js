import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { changeFormData } from '../actions/userDialog'

function SignUpForm(props) {
  const { dispatch } = props
  function onChangeFormData(event, key){
    dispatch(changeFormData(key, event.target.value))
  }
  return(
    <form className="sign-up" onSubmit={props.onSubmit}> 
      <div className="row">
        <label htmlFor="mail"><i className="iconfont icon-youjian"></i></label>
        <input 
          type="text" 
          id="email" 
          onChange={(event) => {
            onChangeFormData(event, 'email') 
          }}
          placeholder="email"
        />
      </div>
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
        <button type="submit">Sign Up</button>
        <p>Already have an account?<Link to="/login/signIn">Sign In</Link></p>
      </div>
    </form>)
}

export default connect((state) => ({
  formData: state.formData
}))(SignUpForm)