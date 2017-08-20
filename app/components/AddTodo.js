import React, { Component } from "react"
import { connect } from "react-redux"
import { addNewTodo } from "../actions/todoList"




class AddTodo extends Component{
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    let { dispatch } = this.props
    //输入不能为空还要细化
    if(this.textInput.value){
      dispatch(addNewTodo(this.textInput.value))
      this.textInput.value = ''
    } else {
      alert("输入不能为空")
    }
  }
  render(){
    return (
      <div className="addTodo">
        <input 
          type="text" 
          ref={ (input) => {this.textInput = input} }
        />
        <button onClick={this.onClick}>Add</button>
      </div>
    )
  }
  componentDidMount(){
    this.textInput.focus()
  }
}

export default connect(() => ({}))(AddTodo) 
