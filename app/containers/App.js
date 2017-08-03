import React, { Component } from "react"
import { Link } from 'react-router'
import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"
import { connect } from "react-redux"
import { addNewTodo, deleteTodo, modifyTodo, toggleTodo, editTodo } from "../actions/todoList"


class App extends Component {
  render() {
    let {todos, dispatch, children} = this.props
    console.log(this.props)
    return (
      <div className="App">
        <AddTodo 
          onAddContent={text =>dispatch(addNewTodo(text))} />
        <TodoList todos={todos} 
          onDelete={index=>dispatch(deleteTodo(index))}
          onModify={(index)=>dispatch(modifyTodo(index))}
          onEdit={(text, index)=>dispatch(editTodo(text, index))}
          editbox={children}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { 
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App)
