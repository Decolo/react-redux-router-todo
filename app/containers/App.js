import React, { Component } from 'react'
import { Link } from 'react-router'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions/todoList'
import Filter from './Filter'




class App extends Component {
  render() {
    let { children } = this.props
    return (
      <div className='App'>
        <div className="first-row">
          <span className="title">ToDoList</span> 
          <Link 
            to="/login" 
            className="sign-out">
            <i className="iconfont icon-dengchu"></i>
          </Link> 
        </div>
        <div className="second-row">
          <div className="todo">todo</div>
          <div className="done">done</div>
        </div>
        <AddTodo />
        <TodoList  
          editbox={children}
        />
        <Filter />
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
