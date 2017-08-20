import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router'
import { deleteTodo, editTodo, modifyTodo, showEditBox, toggleTodo } from "../actions/todoList"

class Todo extends React.Component{
  onDelete() {
    let { dispatch } = this.props
    dispatch(deleteTodo(this.props.index))
  }
  onShowEditBox() {
    let { dispatch } = this.props
    dispatch(showEditBox(this.props.index))
  }
  changeEditConent(e) {
    let editContent = e.target.value
    let { dispatch } = this.props
    dispatch(editTodo(editContent, this.props.index))
    // this.props.onEdit.call(null, editContent, this.props.index)
  }
  onFinishClick() {
    let { dispatch } = this.props
    dispatch(modifyTodo(this.props.index))
    dispatch(showEditBox(this.props.index))
  }
  onCompleteItem() {
    let { dispatch } = this.props
    dispatch(toggleTodo(this.props.index))
  }
  render(){
    return(
      <li>
        {!this.props.todo.editable? 
          <div>
            <input type="checkbox" onChange={this.onCompleteItem.bind(this)} checked={this.props.todo.completed}/>
            <span>{this.props.todo.content}</span>
            <button onClick={this.onShowEditBox.bind(this)}>modify</button>
            <button onClick={this.onDelete.bind(this)}>x</button>
          </div>
          :
          <div>
            <input 
              defaultValue={this.props.todo.content}
              onChange={this.changeEditConent.bind(this)}
            />
            <button onClick={this.onFinishClick.bind(this)}>Finish</button>
            <button onClick={this.onDelete.bind(this)}>x</button>
          </div>
        } 
      </li>
    )
  }
}
export default connect(() => ({}))(Todo)