import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        task: ''
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addTodo(this.state)
        e.target.querySelector('input').value = ''
        
    }
    handleChange = (e)=>{
       
            this.setState({
                task: e.target.value
            })
        
    }
    render() {
        return (
             
                <form className ="todo__form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add todos..." onChange={this.handleChange}/>
                    <button className="todo__add-btn">Add</button>
                </form>
            
        )
    }
}

export default AddTodo;