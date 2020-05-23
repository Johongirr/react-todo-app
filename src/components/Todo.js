import React, {Fragment} from 'react'

const Todo = ({todos,removeFromLocalStorage})=> {
    return todos.length ? (
        todos.map(todo=>{
            return (
                <div key={todo.id} className="todo__item-container">
                    <p className="todo__text">{todo.task}</p>
                    <button className="todo__remove-btn btn" onClick={()=>{removeFromLocalStorage(todo.id)}}>x</button>
                </div>
            )
        })
    ) :
    (<div className="center todo__no-left">Ther are no todos left</div>)

}

export default Todo;