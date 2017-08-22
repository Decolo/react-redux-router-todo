import React from 'react'
import { Link } from 'react-router'

export default function SignInForm(props){
  function onChangeFormData(event, key){
    props.changeForm.call(null, key, event.target.value)
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
      <div className="action">
        <button type="submit">Sign In</button>
        <p className="tip">Need an account?<Link to='/login' className="link">Sign Up</Link></p>
        <p className="tip">Forget password?<Link to='/login/forget' className="link">Forget Password</Link></p>
      </div>
      
    </form>)
}
