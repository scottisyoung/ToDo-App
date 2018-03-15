import React, { Component } from 'react';
import Todos from "./components/Todos/Todos.js";
import TodoLists from "./components/TodoLists/TodoLists.js";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos.js";
import './App.css';

import background from './images/rawpixel-com-579264-unsplash.jpg';


class App extends Component {
      constructor() {
        super()
        this.state={
          todos: [],
          completedTodos: [],
    }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.deleteComplete = this.deleteComplete.bind(this);
  }

  handleSubmit(e, item) {
    e.preventDefault(); 
    const newTodo = item;
    if(newTodo) {
      const newTodoList = [...this.state.todos, newTodo]
      this.setState({
        todos: newTodoList,
    })
  }
}

completeTodo(todo, i) {
    let newTodoState = [...this.state.todos]
    const doneTodo = newTodoState.splice(i,1);
    let newCompletedTodoState = [...this.state.completedTodos, doneTodo]
  this.setState({
    todos: newTodoState,
    completedTodos: newCompletedTodoState
  })
}

deleteTodo(todo, i) {
  const newTodoState = [...this.state.todos]
  newTodoState.splice(i,1);
  this.setState({
    todos: newTodoState
  })
}

deleteComplete(todo, i) {
  const newCompleteState = [...this.state.completedTodos]
  newCompleteState.splice(i,1);
  this.setState({
    completedTodos: newCompleteState
  })
}

  render() {

    return (
      <div className="background"><img src={background} alt="background image"/>
        <div>
          <Todos handleSubmit={this.handleSubmit}/>
          <TodoLists todos={this.state.todos} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo}/>
          <CompletedTodos completedTodos={this.state.completedTodos} deleteComplete={this.deleteComplete}/>
        </div>
      </div>
    );
  }
}

export default App;
