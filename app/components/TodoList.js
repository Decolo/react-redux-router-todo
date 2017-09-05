import React, { Component } from "react"
import Todo from "./Todo"
import { connect } from 'react-redux'


// const SHOW_ACTIVE = VisibilityFilters .SHOW_ACTIVE
// const SHOW_COMPLETED = VisibilityFilters .SHOW_COMPLETED
// const SHOW_ALL = VisibilityFilters .SHOW_ALL
class TodoList extends Component {
  
  render(){ 
    let todoItem = this.props.todos.map(
      (item,index)=>{
        return (<Todo 
          todo={item} 
          key={'todo' + index} 
          index={index}
          editbox={this.props.editbox}
        />)
      })
    return (
      <ul className="todolist row">
        {todoItem}
      </ul>
    ) 
  }
}
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(item => item.completed)
  case 'SHOW_ACTIVE':
    return todos.filter(item => !item.completed)
  }
}
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
export default connect(mapStateToProps)(TodoList)
