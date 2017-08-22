import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ForgetPasswordTab extends Component {
  onChangeFormData(event, key){
    this.props.changeForm.call(null, key, event.target.value)
  }
  render(){
    return(
      <div className="forget-tab">
        <h3>Forgot Password?</h3>
        <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
        <p>For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        <form className="forgotPassword"> {/* 登录*/}
          <div className="row">
            <label><i className="iconfont icon-youjian"></i></label>
            <input 
              type="text" 
              onChange={this.onChangeFormData.bind(this, event, 'password')}
              placeholder="email"
            />
          </div>
          <div className="row actions">
            <button type="submit" value="signIn">Send E-mails</button>
            <p className="link"><Link to='/login' className="link">Back to Sign Up</Link></p>
          </div>
        </form>
      </div>)
  }
  
}
function isEmail(str){
  var reg = /\w+@[0-9a-z]{2,8}(\.\w+)+/g
  return reg.test(str)
}
