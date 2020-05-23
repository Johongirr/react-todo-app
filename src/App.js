import React, { Component } from 'react'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends Component {
  state = {
    todos: []
  }
  
  setToLocalStorage = (todo)=>{
    console.log(todo)
    todo.id = Math.random();
    let todos = this.getFromLocalStorage()
    todos = [...todos, todo]
    localStorage.setItem('todos', JSON.stringify(todos))
    this.setState({
      todos: [...todos, todo]
    })
     
  }
  getFromLocalStorage = ()=>{
    let todos = []
    if(JSON.parse(localStorage.getItem('todos'))){
      todos = JSON.parse(localStorage.getItem('todos'))
    } else {
      todos = []
    }
    return todos
  }
 
   
  eraseTodos = ()=>{
    let todos = this.getFromLocalStorage()
    todos = []
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos
    })

  }
  removeFromLocalStorage = (id)=>{
    const todos = this.getFromLocalStorage().filter(todo => todo.id !== id)
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
    this.setState({
      todos
    })
     

  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="todo">
         <div className="todo__container">
              <h1 className="todo__title">Todos</h1>
              <AddTodo addTodo={this.setToLocalStorage}/>
              <Todo todos = {this.getFromLocalStorage()}  removeFromLocalStorage={this.removeFromLocalStorage}/>
              <button className="todo__clear" onClick={this.eraseTodos}>Clear</button>
         </div>
      </div>
    )
  }
}


export default App;
