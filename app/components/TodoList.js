import React, { Component } from "react"
import Todo from "./Todo"

export default class TodoList extends Component {
    render(){
        let todoItem = this.props.todos.map(
            (item,index)=>{
                return (<Todo todo={item} key={"todo" + index} 
                            index={index} 
                            onDelete={this.props.onDelete}
                            onModify={this.props.onModify}
                            onEdit={this.props.onEdit}
                            editbox={this.props.editbox}
                        />)
            })
        return (
            <ul className="todolist">
                {todoItem}
            </ul>
        )
        
    }
}