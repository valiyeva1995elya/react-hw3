import React, { Component } from "react"
import { ITodo } from "../types"
import { Header, TodoList } from "./components"

// const App = () => {

//     const welcomeText = "this is JavaScript";

//     // const isLogin = true;
//     return (
//         <div>

//             <Header title={welcomeText}/>
//             <TodoList />
//         </div>
//     )
// }

interface IAppState {
    todos: ITodo[]
}

export default class App extends Component<{}, IAppState> {
    state = {
        todos: [
            { id: 1, text: "lern React", done: false, important: false },
            { id: 2, text: "drink Coffee", done: false, important: false },
            { id: 3, text: "drink Soda", done: false, important: false },
        ]
    }

    onChangeStateTodos = (id:number, newState: "done" | "important") => {
        this.setState((state) => {
            const todoIdx = this.state.todos.findIndex(item => item.id === id)
            const newTodo = {
                ...state.todos[todoIdx],
            done: !state.todos[todoIdx].done,

        }
        console.log(newState);
        
            const newTodo2 = {
                ...state.todos[todoIdx],
            important: !state.todos[todoIdx].important 
        }
            const before = state.todos.slice(0, todoIdx)
            const after = state.todos.slice(todoIdx + 1)
            
            if( newState === "done"){

                return{
                    todos: [...before, newTodo, ...after]
                }      
            }else{
                return{
                    todos: [...before, newTodo2, ...after]
                }  
            }
        })
    }

    render() {
        return (
            <div>

                <Header title="Hello" />
                <TodoList
                    todos={this.state.todos}
                    onDone={this.onChangeStateTodos}
                    onImportant={this.onChangeStateTodos}
                />
            </div>
        )
    }
}