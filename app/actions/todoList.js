

export const ADD_NEW_TODO = "add new todo"
export const DELETE_TODO = "delete todo"
export const MODIFY_TODO = "modify todo"
export const EDIT_TODO = "edit todo"
export const TOGGLE_TODO = "toggle todo"


export const addNewTodo = function (text){
    return {
        type: ADD_NEW_TODO,
        text 
    }
}

export const deleteTodo = function (index){
    return {
        type: DELETE_TODO,
        index
    }
}
export const modifyTodo = function (index){
    return {
        type: MODIFY_TODO,
        index
    }
}
export const editTodo = function (text, index){
    return {
        type: EDIT_TODO,
        text,
        index
    }
}
export const toggleTodo = function (index){
    return {
        type: TOGGLE_TODO,
        index
    }
}



