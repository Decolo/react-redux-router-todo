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
      <div className="App">
        <div className="title row">
          <p>ToDoList</p>
          <div className="btn-container">
            <Link 
              to="/login" 
              className="sign-out">
              <i className="iconfont icon-dengchu"></i>
            </Link> 
          </div> 
        </div>
        <ul className="hint row">
          <li className="todo">todo</li>
          <li className="done">done</li>
        </ul>
        <TodoList  
          editbox={children}
        />
        <div className="input row">
          <AddTodo />
        </div>
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
