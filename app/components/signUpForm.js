import React from 'react'
import { Link } from 'react-router'

export default function SignUpForm(props) {
  function onChangeFormData(event, key){
    props.changeForm.call(null, key, event.target.value)
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
      <div className="action">
        <button type="submit">Sign Up</button>
        <p className="link">Already have an account?<Link to='/login/sign_in' className="link">Sign In</Link></p>
      </div>
    </form>)
}

