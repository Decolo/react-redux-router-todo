import React, { Component } from 'react'
import { Link } from 'react-router'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions/todoList'
import Filter from './Filter'
import '../scss/style.scss'



class App extends Component {
  render() {
    let { children } = this.props
    return (
      <div className='App'>
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
