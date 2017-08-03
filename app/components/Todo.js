import React, { Component } from "react"
export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEdit: false,
        }
    }
    onDelete(){
        this.props.onDelete.call(null, this.props.index)
    }
    onModifyClick(){
        this.setState(Object.assign({}, this.state, {
            isEdit:!this.state.isEdit,
        }))
    }
    changeEditConent(e){
        let editContent = e.target.value
        this.props.onEdit.call(null, editContent, this.props.index)
    }
    onFinishClick(){
        this.props.onModify.call(null, this.props.index)
        this.setState(Object.assign({}, this.state, {
            isEdit:!this.state.isEdit,
        }))
    }
    render(){
        return(
                <li>
                    {!this.state.isEdit ?
                        <div>
                            <span>{this.props.todo.content}</span>
                            <button onClick={this.onModifyClick.bind(this)}>modify</button>
                            <button onClick={this.onDelete.bind(this)}>x</button>
                        </div>
                    :
                        <div>
                            <input type="text" defaultValue={this.state.editContent}
                                onChange={this.changeEditConent.bind(this)}
                            />
                            <button onClick={this.onFinishClick.bind(this)}>finish</button>
                        </div>
                    }
                </li>
            )
    }
}