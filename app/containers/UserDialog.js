import React from 'react'
import SignIn from '../components/signInForm'
import SignUp from '../components/signUpForm'
import ForgetPsdTab from '../components/forgetPsdTab'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeFormData } from '../actions/userDialog'

export default class UserDialog extends React.Component{
  render(){
    console.log(this.props.children)
    return(
      <div className="user-dialog">
        <div className="bubble">
          <div className="wrapper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="bubble">
          <div className="wrapper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="login-pic">
        </div>
        <div className="content">
          <div className="wrap">
            <h1>Welcome to TodoList</h1>
            <div className="login-tab">
              {this.props.children}
            </div>
          </div>
        </div>
      </div> 
    )
  }
}







