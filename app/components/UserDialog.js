import React from 'react'
import SignIn from '../containers/signInForm'
import SignUp from '../containers/signUpForm'
import { connect } from 'react-redux'





class UserDialog extends React.Component{
  render(){ 
    return(
      <div className="user-dialog-wrapper">
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
          {this.props.children}
        </div> 
      </div>)
  }
}

function mapStateToProps(state){
  return{
    formData: state.formData
  }
}
export default connect(mapStateToProps)(UserDialog)