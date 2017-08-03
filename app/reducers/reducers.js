import { ADD_NEW_TODO, DELETE_TODO, MODIFY_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions/todoList'
export default function todoApp(state,action){
    switch (action.type){
        case ADD_NEW_TODO:
            return Object.assign({}, state, {
                todos:[
                    ...state.todos,
                    {
                        content: action.text,
                        completed: false,
                        editContent: ""
                    }
                ]
            })
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index),
                    ...state.todos.slice(action.index + 1)
                ]
            })
        case MODIFY_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index), 
                    Object.assign({}, state.todos[action.index], {
                        content: state.todos[action.index].editContent,
                        editContent: ""
                    }),
                    ...state.todos.slice(action.index + 1)
                ]
            })
        case EDIT_TODO:
            return  Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index), 
                    Object.assign({}, state.todos[action.index], {
                        editContent: action.text
                    }),
                    ...state.todos.slice(action.index + 1)
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index), 
                    Object.assign({}, state[action.index], {
                        completed: !state[action.index]
                    }),
                    ...state.todos.slice(action.index + 1)
                ]
            }) 
        default:
            return state
    }
}